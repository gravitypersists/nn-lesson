// import katex from 'katex'

const ktx = katex.renderToString

const w = ktx('\\vec{w}')
const x = ktx('\\vec{x}')
const z = ktx('\\vec{z}')
const d = ktx('\\vec{d}')

const body = `
  A neural network is like a black box. You give input, and depending on its configuration, you get output.

  [[ image of neural network ]]

  Mathemetically, we can represent a neural network by the following equation, where ${z} is the output vector, ${x} the input vector, and ${w} the weight vector.

  --- ${ ktx('\\vec{z} = f(\\vec{x}, \\vec{w})') }

  That is, ${z} is a function of ${x} and ${w}.

  Now suppose we have a desired function, that we wish the neural network to represent

  --- ${ ktx('\\vec{d} = f(\\vec{x})') }

  It is then clear that our task is to configure ${ ktx('\\vec{w}') } such that ${ ktx('\\vec{z} \\approx \\vec{d}') }.
`
export default body
