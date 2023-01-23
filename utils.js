export function loadShader(gl, type, source) {
  // 根据着色器类型建立着色器对现象
  const shader = gl.createShader(type)
  //加载保存好的着色器代码字符串变量
  gl.shaderSource(shader, source)
  //编译着色器
  gl.compileShader(shader)
  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (compiled) return shader
  else {
    const error = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error('load shader error', { cause: error })
  }
}
export function initShaders(gl, vsSource, fsSource) {
  try {
    // 新建一个shaderProgram
    const program = gl.createProgram()
    // 建立着色器对象
    const vertShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)
    const fragShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)
    // 分别附加两个已编译好的着色器对象
    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    // 链接两个附件加好的着色器程序
    gl.linkProgram(program)
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (linked) {
      // 开启程序的使用
      gl.useProgram(program)
      // 将程序对象挂载到gl上下文
      gl.program = program
      return true
    } else {
      const error = gl.getProgramInfoLog(shader)
      gl.deleteProgram(program)
      gl.deleteShader(vertShader)
      gl.deleteShader(fragShader)
      throw new Error('link program error', { cause: error })
    }
  } catch (err) {
    switch (err.message) {
      case 'link program error':
        console.log(err.cause)
        break
      case 'load shader error':
        console.log(err.cause)
        break
    }
  }
}
export function initVertexBuffers(gl, bufferArray, glVars) {
  const vertices = bufferArray instanceof Array ? new Float32Array(bufferArray) : bufferArray
  const FSIZE = vertices.BYTES_PER_ELEMENT
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  for (const key in glVars) {
    if (glVars.hasOwnProperty(key)) {
      const { size, normalized = false, stried, offset = 0 } = glVars[key]
      const vertex = gl.getAttribLocation(gl.program, key)
      gl.vertexAttribPointer(vertex, size, gl.FLOAT, normalized, stried * FSIZE, offset * FSIZE)
      gl.enableVertexAttribArray(vertex)
    }
  }
}
