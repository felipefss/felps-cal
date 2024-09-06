'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  duration: z.coerce.number(),
  description: z.string().optional(),
  questions: z.array(z.string()),
});

export async function createEventType(formData: FormData) {
  const data: Record<string, unknown> = {};
  const questions: string[] = [];
  data.questions = questions;

  for (const [key, value] of formData.entries()) {
    if (key.startsWith('question')) {
      questions.push(value as string);
    } else {
      data[key] = value;
    }
  }

  const parsedData = schema.parse(data);

  // TODO: Save the data to the database
  console.log(parsedData);
}
