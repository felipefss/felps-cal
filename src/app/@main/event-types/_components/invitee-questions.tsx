'use client';

import { PlusIcon } from '@radix-ui/react-icons';
import {
  Flex,
  Text,
  Box,
  Button,
  IconButton,
  TextArea,
} from '@radix-ui/themes';
import { useState } from 'react';
import { Trash } from '@phosphor-icons/react';

const initialQuestions = [
  {
    id: 1,
    question: 'Please share anything that will help prepare for our meeting',
  },
];

export function InviteeQuestions() {
  const [questions, setQuestions] = useState(initialQuestions);

  const handleAddQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        question: '',
      },
    ]);
  };

  const handleDeleteQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <Flex direction="column" gap="4">
      <Text as="div" size="2" weight="bold">
        Invitee questions
      </Text>

      {questions.map(({ id, question }, index) => (
        <Box key={id}>
          <Text size="2" as="label">
            Question {index + 1}
          </Text>
          <Flex gap="2">
            <TextArea
              className="flex-1"
              value={question}
              placeholder="Type your question"
            />

            <IconButton
              variant="outline"
              className="hover:cursor-pointer"
              color="red"
              onMouseDown={() => handleDeleteQuestion(id)}
            >
              <Trash />
            </IconButton>
          </Flex>
        </Box>
      ))}

      <Button
        variant="outline"
        className="hover:cursor-pointer"
        onMouseDown={handleAddQuestion}
      >
        <PlusIcon /> Add new question
      </Button>
    </Flex>
  );
}
