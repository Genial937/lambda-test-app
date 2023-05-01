# Run test without lambda

## Normal Test

```
// This one passes
yarn test Homepage
```

## Component tests

```
// this one passes
yarn test-ct FormTest
```

# Run tests on Lamdda

## Normal Test

```
// this one passes
yarn lambda:test test_1
```

## Component tests

```
// this one fails
yarn lambda:test-ct FormLambdaTest
```
