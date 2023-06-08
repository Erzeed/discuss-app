/**
* test scenario for taddcomment
*
* - addcomment function
*  - should handle correctly  when user typing
*  - should handle comment on thread detail when user click button post
*/

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import AddCommentInput from './add-comment';

expect.extend(matchers);

describe('CommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle content typing correctly', async () => {
    // Arrange
    render(<AddCommentInput addThread={() => {}} />);
    const contentInput = await screen.getByPlaceholderText('Berikan Komentar');

    // Action
    await userEvent.type(contentInput, 'ini content');

    // Assert
    expect(contentInput).toHaveValue('ini content');
  });
  //   // ... skenario pengujian lainnya

  it('should handle post comment when post button is clicked', async () => {
    // Arrange
    const mockdComment = vi.fn();
    render(<AddCommentInput addKoment={mockdComment} />);
    const contentInput = await screen.getByPlaceholderText('Berikan Komentar');
    await userEvent.type(contentInput, 'content');
    const postButton = await screen.getByRole('button', { name: 'Komentar' });

    // Action
    await userEvent.click(postButton);

    // Assert
    expect(mockdComment).toHaveBeenCalledWith({
      content: 'content',
    });
  });
});
