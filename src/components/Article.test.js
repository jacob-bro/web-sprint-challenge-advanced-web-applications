import React from 'react';
import { render, screen, waitFor } '@testing-library/jest-dom';
import { fetcharticles as mockFetchArticles } from '../services/fetch';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';

jest.mock('../services/fetch');


test('renders component without errors', async ()=> {
    mockFetchArticles.mockResolvedValueOnce({data: []});
    render(<Article />);
    await waitFor(() => {
        const headline = screen.getById("headline");
        expect(headline).toBeVisible;
    });

});

test('renders component without errors', ()=> {
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.