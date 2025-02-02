function isDate(val) {
    // Cross realm compatible
    return Object.prototype.toString.call(val) === '[object Date]';
}

function isObj(val) {
    return val !== null && typeof val === 'object';
}

function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
        return JSON.stringify(val);
    } else {
        return val;
    }
}

function buildForm({ action, params = {} }) {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', action);

    if (isObj(params)) {
        Object.keys(params).forEach(key => {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', stringifyValue(params[key]));
            form.appendChild(input);
        });
    } else {
        console.error('Invalid params: Expected an object but received', params);
    }

    return form;
}

export function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
}
