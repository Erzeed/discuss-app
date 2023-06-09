/**
* test scenario for add thread
*
* - add thread function
*  - should handle typing correctly when user typing on title
*  - should handle typing correctly when user typing on category
*  - should handle typing correctly when user typing on content
*  - should handle add thread when user click button post
*
*/

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import AddThreadInput from './add-threads';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await userEvent.type(titleInput, 'testing');

    // Assert
    expect(titleInput).toHaveValue('testing');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await userEvent.type(categoryInput, 'Categorytest');

    // Assert
    expect(categoryInput).toHaveValue('Categorytest');
  });

  it('should handle content typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const contentInput = await screen.getByPlaceholderText('Whats Happening');

    // Action
    await userEvent.type(contentInput, 'ini content');

    // Assert
    expect(contentInput).toHaveValue('ini content');
  });
  //   // ... skenario pengujian lainnya

  it('should handle post add thread when post button is clicked', async () => {
    // Arrange
    const mockddPost = vi.fn();
    render(<AddThreadInput addThread={mockddPost} />);
    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'Titletest');
    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'categorytest');
    const contentInput = await screen.getByPlaceholderText('Whats Happening');
    await userEvent.type(contentInput, 'contenttest');
    const postButton = await screen.getByRole('button', { name: 'Post' });

    // Action
    await userEvent.click(postButton);

    // Assert
    expect(mockddPost).toHaveBeenCalledWith({
      title: 'Titletest',
      body: 'contenttest',
      category: 'categorytest',
    });
  });
});
