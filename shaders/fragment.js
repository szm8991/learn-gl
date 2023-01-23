// 强类型，类c/c++风格
// 语句必须以分号结尾
// 内置变量以gl_开头
// 简单数据类型只有数字(int,float)和布尔类型
// 复杂数据类型——向量Vector（vec2、vec3、vec4），可以通过.x、.y、.z、.w获取分量
// 复杂数据类型——矩阵Matrix（mat2、mat3、mat4）
// 复杂数据类型——对象Struct，类比js的对象，也是通过.获取属性
export const fragmentShader = /* glsl */ `
precision mediump float;
struct Light {
    vec3 color;
    vec4 position;
};
// 计算两个点的距离
float getDiatance(vec2 p1, vec2 p2) {
    return pow( pow(p1.x - p2.x, 2.0) + pow(p1.y - p2.y, 2.0) ,0.5);
}
void main() {
    float x = (gl_FragCoord.x / 400.0 - 0.5) * 2.0;
    float y = (gl_FragCoord.y / 400.0 - 0.5) * 2.0;
    vec3 color1 = vec3(1.0, 1.0, 1.0);
    vec3 color2 = vec3(0.0, 0.0, 1.0);
    // float dis = getDiatance(vec2(x, y), vec2(0.0, 0.0));
    float dis = distance(vec2(x, y), vec2(0.0, 0.0));
    if(dis > 0.4) {
        gl_FragColor = vec4(color1 - color2, 1.0);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }
}`
