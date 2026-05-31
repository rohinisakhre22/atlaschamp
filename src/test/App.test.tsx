import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { App } from '../App';
import { NAV_ITEMS, SERVICES, SITE } from '../constants/site';
import { Layout } from '../components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ServicePage } from '../pages/ServicePage';

function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services/:serviceId" element={<ServicePage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('App routes', () => {
  it('renders home page sections', () => {
    renderAt('/');

    expect(screen.getAllByAltText(SITE.name).length).toBeGreaterThan(0);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /comprehensive atlassian services/i })
    ).toBeInTheDocument();
  });

  it('renders primary navigation links', () => {
    renderAt('/');

    for (const item of NAV_ITEMS) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(
        0
      );
    }
  });

  it('renders a service detail page', () => {
    renderAt('/services/migration');

    expect(
      screen.getByRole('heading', { name: SERVICES[1].title })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /discuss this service/i })).toHaveAttribute(
      'href',
      '/?service=migration#contact'
    );
  });
});
