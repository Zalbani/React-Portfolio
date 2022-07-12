import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from '../layouts/Header'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'CustomHeader',
    component: Header,
} as ComponentMeta<typeof Header>

export const CustomHeader = () => <Header />
