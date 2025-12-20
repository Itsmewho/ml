Interactive AI & Math Foundations
A comprehensive, interactive laboratory for visualizing the mathematics and algorithms behind Artificial Intelligence.

This application serves as the "Interactive Textbook" for understanding Machine Learning from the ground up. Before writing code in Python, this tool allows users to visualize, play with, and build intuition for the core concepts—from simple Linear Functions to Deep Reinforcement Learning agents.

Project Goal
To bridge the gap between "Theory" and "Intuition." Instead of staring at static equations, this app uses interactive graphs (Mafs), dynamic SVGs, and simulations to show how AI thinks.

The Curriculum
This application covers the entire spectrum of AI foundations, organized into 5 major pillars:

1. Mathematics & Statistics
The building blocks of neural networks.

Functions: Linear, Sigmoid, ReLU, Tanh, Swish, Mish.

Operations: Dot Product (The engine of AI), Convolution (Sliding Windows).

Calculus: Gradient Descent (Optimization), Euler's Method.

Statistics: Normal Distribution, Bayes Theorem.

Probability: Markov Chains.

2. Classic Machine Learning (Supervised)
Algorithms that learn from labeled data.

Regression: Linear & Logistic Regression.

Classification: K-Nearest Neighbors (KNN).

Geometry: Support Vector Machines (SVM).

Logic: Decision Trees & Random Forests (Ensemble Learning).

3. Unsupervised Learning
Finding patterns in unlabeled data.

Clustering: K-Means (Distance-based), DBSCAN (Density-based).

Dimensionality Reduction: Principal Component Analysis (PCA).

4. Deep Learning
Neural Networks and Architecture.

The Atom: Perceptron (Single Neuron).

The Network: Multi-Layer Perceptron (MLP) & Backpropagation visualizers.

Vision: Max Pooling (CNN building blocks).

Memory: Recurrent Neural Networks (RNN) for sequence data.

5. Reinforcement Learning
Agents learning through trial and error.

The Environment: Grid World (States, Actions, Rewards).

The Dilemma: Multi-Armed Bandit (Explore vs. Exploit).

The Brain: Q-Learning (Value-based learning).

🛠️ Tech Stack
Framework: React (Vite)

Visualization Engine: Mafs (Interactive Math Graphs)

Graphics: Custom SVG Animations

Styling: CSS Modules / Styled Components

Architecture: Registry Pattern (Modular topic loading)

Project Architecture
We utilize a Registry Pattern to manage the massive list of topics without cluttering the codebase.

Plaintext

src/
├── components/          # Reusable UI (Sidebar, Layouts, Controls)
├── config/
│   ├── topicRegistry.jsx   # The Master Controller
│   ├── registries/         # Modular Configuration
│   │   ├── mathRegistry.jsx
│   │   ├── mlRegistry.jsx
│   │   ├── dlRegistry.jsx
│   │   └── rlRegistry.jsx
├── data/                # The Logic & Visuals
│   ├── math/            # Math Visuals (e.g., /sigmoid, /dotProduct)
│   ├── ml/              # Machine Learning (e.g., /knn, /svm)
│   ├── dl/              # Deep Learning (e.g., /perceptron, /rnn)
│   └── rl/              # Reinforcement Learning (e.g., /gridWorld)
Each topic is self-contained in its own folder with three files:

Visual.jsx - The graph or simulation.

Controls.jsx - The sliders and buttons for the user.

Explanation.jsx - The theoretical context.
