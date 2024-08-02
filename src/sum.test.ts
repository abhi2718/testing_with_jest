import React from 'react';
import { render, screen } from '@testing-library/react';
import { sum } from "./sum";

describe('sum()', () => {
   
    it('should add two number', () => {
        const result = sum(2, 3);
        expect(result).toBe(5)
    })
    it('should add two -ve number', () => {
        const result = sum(-2, -3);
        expect(result).toBe(-5)
    })
})

