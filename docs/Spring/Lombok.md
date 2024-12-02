---
next:
  text: 'Spring 全家桶'
  link: '/Spring/'
---

# Lombok 工具库

## @Data 注解

@Data 注解是 Lombok 提供的一个简化代码的注解，它可以自动为类生成 `getter`、`setter`、`equals`、`hashCode`、`toString` 方法。

```java
@Data // [!code focus]
public class Account {
    private int id;
    private String name;
    private int age;
}
```

## 自动生成 Getter 和 Setter 方法

添加 @Getter 和 @Setter 至类上时，会为类中的所有字段添加 `getter` 和 `setter` 方法；添加至字段上时，则仅对该字段生效。

```java
//为所有字段生成private的Getter方法
//为所有字段生成不添加任何访问权限关键字的Setter方法
@Getter(AccessLevel.PRIVATE)    // [!code focus:2]
@Setter
public class Account {
    private int id;
    //不为name生成Getter方法，字段上的注解优先级更高
    @Getter(AccessLevel.NONE)
    private String name;
    //即使上面添加Setter注解，这里也不会被覆盖，但是仅限于同名不同参的情况
    //可以使用@Tolerate注解使Lombok忽略它的存在，继续生成
    public void setName(int name) {
        System.out.println("我是自定义的");
        this.name = name;
    }
    private int age;
}
```

## 自动生成构造方法

@AllArgsConstructor 用于生成全参构造方法；@NoArgsConstructor 用于生成无参构造方法；@RequiredArgsConstructor 用于生成包含那些需要初始化参数的构造方法。

```java
//@RequiredArgsConstructor 类中哪些字段为final，它就只针对这些字段生成对应的构造方法
//force属性可以在创建无参构造时，为final类型的字段给一个默认值
@NoArgsConstructor(force = true) // [!code focus:2]
@AllArgsConstructor
public class Account {
    ...
}
```

## 自动生成 toString 方法

在类上添加 @ToString 后，默认会为所有字段生成对应的 toString 操作，如果我们需要排除某些字段，可以使用 @ToString.Exclude 注解。

```java
//@ToString(onlyExplicitlyIncluded = true) 白名单模式，只生成包含在注解中指定的字段
@ToString // [!code focus:2]
@AllArgsConstructor
public class Account {
    @ToString.Exclude
    private int id;
    //@ToString.Include(name = "名字", rank=1)
    private String name;
    private int age;
}
```

## 自动生成 equals 和 hashCode 方法

在类上添加 @EqualsAndHashCode 后，默认会为所有字段生成对应的 equals 和 hashCode 方法，如果我们需要排除某些字段，可以使用 @EqualsAndHashCode.Exclude 注解。

```java
//判断对象是否相等以及计算对象的哈希码时，不考虑id和shape这两个属性的值
@EqualsAndHashCode(exclude = {"id", "shape"}) // [!code focus]
public class Account {
    ...
}
```

## 资源释放和异常处理

@Cleanup 注解用于自动释放资源。@SneakyThrows 注解用于自动处理异常。

```java
@SneakyThrows // [!code focus]
public static void main(String[] args) {
    @Cleanup FileInputStream in = new FileInputStream("test.py"); // [!code focus]
    byte[] bytes = in.readAllBytes();
    System.out.println(new String(bytes));
}
```

## 非空判断

只需要在参数前面添加 @NonNull，就会自动为其生成对应的判空代码。除了方法的形式参数外，@NonNull 也可以添加到局部变量上，不过只会有一个警告效果。

```java
public static void test(@NonNull String text){  // [!code focus]
    System.out.println(text);
}
```