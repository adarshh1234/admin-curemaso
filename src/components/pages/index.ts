import { lazy } from 'react';
import type { PageId } from '../../types/navigation';

export const PAGE_COMPONENTS: Record<PageId, ReturnType<typeof lazy>> = {
  dashboard: lazy(() => import('./DashboardPage').then((m) => ({ default: m.DashboardPage }))),
  customers: lazy(() => import('./CustomersPage').then((m) => ({ default: m.CustomersPage }))),
  pipeline: lazy(() => import('./PipelinePage').then((m) => ({ default: m.PipelinePage }))),
  inbox: lazy(() => import('./InboxPage').then((m) => ({ default: m.InboxPage }))),
  fieldforce: lazy(() => import('./FieldForcePage').then((m) => ({ default: m.FieldForcePage }))),
  aicopilot: lazy(() => import('./AiCopilotPage').then((m) => ({ default: m.AiCopilotPage }))),
  workflows: lazy(() => import('./WorkflowsPage').then((m) => ({ default: m.WorkflowsPage }))),
  analytics: lazy(() => import('./AnalyticsPage').then((m) => ({ default: m.AnalyticsPage }))),
  integrations: lazy(() => import('./IntegrationsPage').then((m) => ({ default: m.IntegrationsPage }))),
  compliance: lazy(() => import('./CompliancePage').then((m) => ({ default: m.CompliancePage }))),
};
