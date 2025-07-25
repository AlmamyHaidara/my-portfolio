import { z } from "zod";

/**
 * Schéma de validation pour les formulaires de contact
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères",
  }).max(50),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  message: z.string().min(10, {
    message: "Le message doit comporter au moins 10 caractères",
  }).max(1000),
});

/**
 * Type inféré du schema de formulaire de contact
 */
export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Schéma de validation pour les projets
 */
export const projectSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit comporter au moins 2 caractères",
  }).max(100),
  description: z.string().min(10, {
    message: "La description doit comporter au moins 10 caractères",
  }).max(500),
  technologies: z.array(z.string()),
  image: z.string().url({
    message: "Veuillez entrer une URL d'image valide",
  }),
  url: z.string().url({
    message: "Veuillez entrer une URL valide",
  }).optional(),
  github: z.string().url({
    message: "Veuillez entrer une URL GitHub valide",
  }).optional(),
  featured: z.boolean().default(false),
  date: z.string().or(z.date()),
});

/**
 * Type inféré du schema de projet
 */
export type ProjectValues = z.infer<typeof projectSchema>;

/**
 * Schéma de validation pour les articles de blog
 */
export const blogPostSchema = z.object({
  title: z.string().min(5, {
    message: "Le titre doit comporter au moins 5 caractères",
  }).max(100),
  excerpt: z.string().min(10, {
    message: "L'extrait doit comporter au moins 10 caractères",
  }).max(300),
  content: z.string().min(100, {
    message: "Le contenu doit comporter au moins 100 caractères",
  }),
  slug: z.string().min(5, {
    message: "Le slug doit comporter au moins 5 caractères",
  }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Le slug doit être en minuscules, sans espaces et peut contenir des tirets",
  }),
  date: z.string().or(z.date()),
  author: z.string(),
  tags: z.array(z.string()).optional(),
  coverImage: z.string().url().optional(),
});

/**
 * Type inféré du schema d'article de blog
 */
export type BlogPostValues = z.infer<typeof blogPostSchema>; 