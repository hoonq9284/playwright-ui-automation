// utils/helper.js

export async function highlightElement(locator) {
    const duration = 100; // 하이라이트 지속시간

    await locator.evaluate((elemenet) => {
        elemenet.setAttribute('data-original-style', elemenet.getAttribute('style') || '');
        elemenet.style.border = '3px solid #ff0000';
    });

    await locator.page().waitForTimeout(duration);

    await locator.evaluate((elemenet) => {
        const original = elemenet.getAttribute('data-original-style');
        elemenet.setAttribute('style', original);
        elemenet.removeAttribute('data-original-style');
    });
}