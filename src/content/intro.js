// import katex from 'katex'

const ktx = katex.renderToString

const w = ktx('\\vec{w}')
const x = ktx('\\vec{x}')
const z = ktx('\\vec{z}')
const d = ktx('\\vec{d}')
const P = ktx('P')

const body = `
  A neural network is like a black box. You give input, and depending on its configuration, you get output.

  [[ image of neural network ]]

  Mathemetically, we can represent a neural network by the following equation, where ${z} is the output vector, ${x} the input vector, and ${w} the weight vector.

  --- ${ ktx('\\vec{z} = f(\\vec{x}, \\vec{w})') }

  That is, ${z} is a function of ${x} and ${w}.

  Now suppose we have a desired function, ${d}, based on the same input, ${x}, that we wish the neural network to approximate.

  --- ${ ktx('\\vec{d} = f(\\vec{x})') }

  It is clear, then, that our task is to configure ${ ktx('\\vec{w}') } such that ${ ktx('\\vec{z} \\approx \\vec{d}') }. We can devise a function to represent the deviation between these two vectors, called the performance function, ${ P }, which we arbitrarily define as:

  --- ${ ktx('P = f(\\vec{d}, \\vec{z}) = -\\tfrac{1}{2}(\\vec{d}-\\vec{z})^2') }

  As ${z} approaches ${d}, ${P} approaches 0. Ultimately, we want to minimize ${P}, and we do so by adjusting the weights, ${w}, which ${z} is a function of.
`
export default body
