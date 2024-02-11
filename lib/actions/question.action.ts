"use server"

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose"
import Question from "@/components/forms/Question";

export interface EditQuestionParams {
    questionId: string;
    title: string;
    content: string;
    path: string;
  }

export async function createQuestion(params:any) {
    try {
        // connect to database
        connectToDatabase()
    } catch (error) {
        
    }
}
export async function editQuestion(params: EditQuestionParams) {
    try {
      connectToDatabase();
  
      const { questionId, title, content, path } = params;
  
      const question = await Question.findById(questionId).populate("tags");
  
      if (!question) {
        throw new Error("Question not found");
      }
  
      question.title = title;
      question.content = content;
  
      await question.save();
  
      revalidatePath(path);
    } catch (error) {
      console.log(error);
    }
  }