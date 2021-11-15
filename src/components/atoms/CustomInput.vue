<template>
    <div
        class="custom-input-wrapper"
        :style="minWidth ? 'min-width:' + minWidth + ';' : ''"
        :class="[
            isTextarea ? 'textarea' : '',
            borderPosition ? borderPosition : '',
            isInvalid ? 'is-invalid' : '',
            withLowPadding ? 'low-padding' : '',
        ]"
    >
        <label :for="inputId">{{ labelText }}</label>
        <input
            @input="handleInput"
            :type="type"
            name="text-input"
            :id="inputId"
            :placeholder="placeholderText"
            :value="value"
            :maxlength="inputMaxLength"
        />
    </div>
</template>

<script>
export default {
    props: {
        inputId: String,
        labelText: String,
        type: String,
        placeholderText: String,
        minWidth: String,
        borderPosition: String,
        isTextarea: Boolean,
        isInvalid: Boolean,
        value: [String, null],
        inputMaxLength: String,
        withLowPadding: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.custom-input-wrapper {
    padding: 12px 16px;

    label {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.5px;
        color: #616c74;
        display: block;
        margin-bottom: 0;
    }
    input {
        border: none;
        display: block;
        width: 100%;

        &:focus {
            border: none;
            outline: none;
        }

        &::placeholder {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.75;
            letter-spacing: normal;
            color: #8b97a0;
        }
    }

    &.is-invalid {
        border: 1px solid #f64d4a;

        input, label, input::placeholder {
            color: #f64d4a;
        }
    }
}

.textarea {
    min-height: 128px;
}
.right {
    border-right: 1px solid #e9eef1;
}
.left {
    border-left: 1px solid #e9eef1;
}
.bottom {
    border-bottom: 1px solid #e9eef1;
}
.top {
    border-right: 1px solid #e9eef1;
}

.all {
    border: 1px solid #e9eef1;
    border-radius: 6px;
    margin-bottom: 16px;
}

.low-padding {
    padding: 9px 16px;
}

@media screen and (max-width: 1024px) {
    .all {
        margin-bottom: 24px;
    }
}
</style>
