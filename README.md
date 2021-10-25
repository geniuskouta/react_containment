# React Containment v.s. React Contexts

## Do not use contexts unless you want to provide globally shared states.

The cons of using contexts is that it creates hard-to-track props flow as they can be accessed anywhere.

## Use containment instead if you want to avoid props drilling

The pros of using containment is to show clearly the component tree and where the props are actually used.
