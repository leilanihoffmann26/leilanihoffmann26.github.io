export const posts = [
    {
        slug: "the-learning-curve",
        title: "The Learning Curve",
        date: "April 6, 2026",
        summary: "A quick introduction to the blog and what I want this space to become.",
        content: [
            "My undergraduate degree did nothing for me. This is a bit dramatic but after four years of grinding, I've come to the realization that I am far from being an expert in the field of computational biology.",
            "The biggest gap in knowledge that I have is moreso on the computational side of things. Most of the software skills I have are from self-teaching and internships.",
            "The topics of this blog may be scattered, but I want to use this space to document my learning journey and share any insights or resources that I find along the way. I hope that this blog can be a valuable resource for others who are also interested in computational biology and want to learn more about the field."        
        ]
    },
    {
        slug: "understanding-spaces",
        title: "Latent and Embedding Spaces: An Intuitive Comparison",
        date: "April 12, 2026",
        summary: "LLM token space vs GAN w space.",
        content: [
            "Representation spaces are a fundemental concept in machine learning, and they play a crucial role in how models learn and generate data. Two common types of representation spaces are the token space in large language models (LLMs) and the w space in generative adversarial networks (GANs).",
            "Latent spaces are samples from to generate data while embedding spaces are used to represent data as inputs to a model.",
            "These terms can get kind of thrown around a lot, and I was personally using them interchangeably for a while.",
            "But it's super important to understand the similarities and differences between these terms and how they relate to different types of models and tasks.",
            "I have a pretty intuitive understanding of embedding/token spaces in large language models thanks to a project I worked on investigating embeddings of protein sequences in transformer models like AlphaFold.",
            "However, I have been struggling to understand the concept of the w space in generative adversarial networks. Specifically, in StyleGAN, which is an advanced GAN architecture that uses a style vector, w, instead of random noise vector, z.",
            "I'll start with a quick overview of token spaces in large language models (mostly as a refresher for myself).",
            "In these models, each token (word) is represented as a high-dimensional vector in a latent space. The model learns to map these tokens to points in the space such that semantically similar tokens are close together. For example, the words 'king' and 'queen' might be close together in the token space because they share similar meanings and contexts.",
            "The LLM discovers these labels such as 'royalty' from prediction.",
            "The size of the token space is bottlenecked by the vocabulary size, and the role of the space is to embed tokens as inputs to the model (transformer).",
            "In contrast, the w space in StyleGAN is a continuous distributuon from which you sample to generate images.",
            "A point in the w space correspnds to an entire image.", 
            "Similar to how words that are semantically similar are close together in the token space, images that are visually similar are close together in the w space. For example, two images of cats might be close together in the w space because they share similar visual features.",
            "This is a work in progress, but I'll continue to update this post as I go."
        ]
    }
];
