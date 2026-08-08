<script setup>
import { ref } from "vue";

const counter = ref(0);
const pressed = ref(false);
</script>

<template>
    <button
        class="vilinko-control vilinko-button-primary vilinko-round-full my-button"
        :data-pressed="pressed"
        @click="counter++"
        @mousedown="pressed = true"
        @mouseup="pressed = false"
        @touchstart="pressed = true"
        @touchend="pressed = false"
    >
        Counter: {{ counter }}
    </button>
</template>

<style>
:root {
    --vilinko-primary-color: #5279fb;
    --vilinko-bg-gray: #f9fafb;
    --vilinko-border-color: #e5e7eb;
    --vilinko-text-main: #1f2937;
    --vilinko-btn-radius: .75rem;
    --vilinko-nav-radius: 1.25rem;
}

/* Base control — shared foundation for all interactive controls */
.vilinko-control {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    background-color: var(--vilinko-bg-gray);
    border: 1px solid var(--vilinko-border-color);
    border-radius: var(--vilinko-btn-radius);
    color: var(--vilinko-text-main);
    transition: all 0.2s ease;
    position: relative;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    text-decoration: none;
}

/* Primary Button Styling */
.vilinko-button-primary {
    background-color: var(--vilinko-primary-color);
    color: #fff;
    font-weight: bold;
    border-color: transparent;
    border-radius: var(--vilinko-btn-radius);
    box-shadow:
        inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.15),
        inset 0 -3px 0 0 rgba(0, 0, 0, 0.05);
}

.vilinko-button-primary:hover {
    filter: brightness(1.15);
    border-color: transparent;
}

/* Rounded Full */
.vilinko-round-full {
    border-radius: 114px !important;
}

/* Component Custom Interactions */
.my-button {
    transform-origin: center;
    will-change: transform;
}

.my-button[data-pressed="true"] {
    transform: scale(0.98);
}
</style>