// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { AppBar } from '../app-bar';

describe('AppBar', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [AppBar],
      template: () => <cho-app-bar />,
    });

    expect(page.root).toBeTruthy();
  });

  describe('hidesOnScroll', () => {
    it('should show on scroll down', async () => {
      const page = await newSpecPage({
        components: [AppBar],
        template: () => (
          <div>
            <cho-app-bar hidesOnScroll />
            <div style={{ height: '200vh' }} />
          </div>
        ),
      });

      page.doc.documentElement.scrollTop = 100;
      page.win.dispatchEvent(new Event('scroll'));
      await page.waitForChanges();

      expect(page.rootInstance.visible).toBe(true);
    });

    it('should hide on scroll down', async () => {
      const page = await newSpecPage({
        components: [AppBar],
        template: () => (
          <div>
            <cho-app-bar hidesOnScroll />
            <div style={{ height: '200vh' }} />
          </div>
        ),
      });

      page.doc.documentElement.scrollTop = 100;
      page.win.dispatchEvent(new Event('scroll'));
      await page.waitForChanges();

      page.doc.documentElement.scrollTop = 0;
      page.win.dispatchEvent(new Event('scroll'));
      await page.waitForChanges();

      expect(page.rootInstance.visible).toBe(false);
    });
  });

  it('should not handle scroll down', async () => {
    const page = await newSpecPage({
      components: [AppBar],
      template: () => (
        <div>
          <cho-app-bar hidesOnScroll={false} />
          <div style={{ height: '200vh' }} />
        </div>
      ),
    });

    page.doc.documentElement.scrollTop = 100;
    page.win.dispatchEvent(new Event('scroll'));
    await page.waitForChanges();

    expect(page.rootInstance.visible).toBe(true);
  });

  describe('hostStyle', () => {
    it('should have fixed position', async () => {
      const page = await newSpecPage({
        components: [AppBar],
        template: () => <cho-app-bar position="sticky" />,
      });

      expect(page.root.style.position).toBe('fixed');
    });
  });

  describe('didClickHamburger', () => {
    it('should emit event', async () => {
      const didClickHamburger = jest.fn();
      const page = await newSpecPage({
        components: [AppBar],
        template: () => <cho-app-bar onHamburgerClicked={didClickHamburger} />,
      });

      page.root.shadowRoot.querySelector('cho-button').dispatchEvent(new MouseEvent('click'));

      expect(didClickHamburger).toHaveBeenCalled();
    });
  });
});
