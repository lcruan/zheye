### 如何通过 ref 来获取 dom对象？

1. vue3提供一个简单的方式，在setup中提供一个ref对象来获取dom节点
- 注意：要做到返回的名称与结构中定义的ref命名完全一样，当dom真正挂载的时候，我们就可以从dropdownRef.value拿到节点
- ref的类型：在setup中还不是dom节点类型，挂载后则是dom节点，所以初始类型则是两者的联合类型
```html
<div class="dropdown" ref="dropdownRef">
```

```js
const dropdownRef = ref<null | HTMLElement>(null) 
```
