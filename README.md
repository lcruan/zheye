### 如果需要将构造函数断言成一个类型，则可以使用PropType来操作

```js
  props: {
    list: {
      // Array是一个数组构造函数，没办法断言为一个类型，ProType可以传入一个泛型
      // 如果需要将构造函数断言成一个类型，则可以使用PropType来操作
      type: Array as PropType<ColumnProps[]>, // 将数组断言为 ColumnProps类型数组
      required: true
    }
  },
```


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

### vue3 的一个特性 hooks 自定义函数使用
- setup中写的普通函数逻辑只能执行一次，更新的时候不会执行，所以可以使用watch来检测


### vue3 自定义组件支持v-model
1. 创建一个名为 modelValue 的 props 属性
```js
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
```

2. 更新值的时候需要发送事件 -》update:modelValue
```js
const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
}
```

### $attrs 支持默认属性
```html
 <input
      class="form-control"
      :class="{'is-invalid' : inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
```
