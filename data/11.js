/**
 *    y
 *    ↑
 *    o → x
 *  ↙z
 * 
 *     v5----- v8
 *   /|      /|
 *  v1------v4|
 *  | |     | |
 *  | |v6---|-|v7
 *  |/      |/
 *  v2------v3
 */

export let normals = [
    0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0, // v1-v2-v3-v4 前面
    0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0, // v5-v6-v7-v8 后面
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, // v1-v2-v6-v7 左面
    1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0, // v3-v4-v7-v8 右面
    0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0, // v1-v4-v5-v8 上面
    0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0, // v2-v3-v6-v7 下面
]

let v1 = [-0.5, 0.5, 0.5]
let v2 = [-0.5, -0.5, 0.5]
let v3 = [0.5, -0.5, 0.5]
let v4 = [0.5, 0.5, 0.5]
let v5 = [-0.5, 0.5, -0.5]
let v6 = [-0.5, -0.5, -0.5]
let v7 = [0.5, -0.5, -0.5]
let v8 = [0.5, 0.5, -0.5]

export let positions = [
    ...v1, ...v2, ...v3, ...v4, // 前面
    ...v5, ...v6, ...v7, ...v8, // 后面
    ...v5, ...v6, ...v2, ...v1, // 左面
    ...v4, ...v3, ...v7, ...v8, // 右面
    ...v5, ...v1, ...v4, ...v8, // 上面
    ...v6, ...v2, ...v3, ...v7, // 下面
]

let c1 = [1.0, 0.0, 0.0]
let c2 = [0.0, 1.0, 0.0]
let c3 = [0.0, 0.0, 1.0]
let c4 = [0.0, 1.0, 1.0]
let c5 = [1.0, 0.0, 1.0]
let c6 = [1.0, 1.0, 0.0]

export let colors = [
    ...c1, ...c1, ...c1, ...c1, //前面
    ...c2, ...c2, ...c2, ...c2, //后面
    ...c3, ...c3, ...c3, ...c3, //左面  
    ...c4, ...c4, ...c4, ...c4,//右面
    ...c5, ...c5, ...c5, ...c5, //上面
    ...c6, ...c6, ...c6, ...c6, //下面
]

export let red = [
    ...c1, ...c1, ...c1, ...c1, //前面
    ...c1, ...c1, ...c1, ...c1, //后面
    ...c1, ...c1, ...c1, ...c1, //左面  
    ...c1, ...c1, ...c1, ...c1,//右面
    ...c1, ...c1, ...c1, ...c1, //上面
    ...c1, ...c1, ...c1, ...c1, //下面
]