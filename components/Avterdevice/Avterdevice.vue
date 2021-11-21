<template>
  <div class="avter_device">
    <div class="avter">
      <img :src="avter" class="icon-xl">
    </div>
    <div class="device">
      <img :src="device" class="icon-l">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avterdevice',
  props: {
    avter: {
      type: String,
      default: ''
    },
    device: {
      type: String,
      default: ''
    }
  }

}
</script>

<style >
.avter_device{
  display: flex;
  position: relative;
  border-radius: 50%;
  box-shadow: -1 -1px 2px rgba(0, 0, 0, 0.1);
}
.avter_device > .device{
  position: absolute;
  top:-0.5rem;
  right:-0.5rem;
  border-radius: 50%;
}
</style>
