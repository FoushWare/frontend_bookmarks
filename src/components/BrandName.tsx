'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { homeTranslations } from '@/data/translations/home.en';
import { homeTranslations as homeTranslationsAr } from '@/data/translations/home.ar';

export function BrandName() {
  const { t } = useTranslation({ en: homeTranslations, ar: homeTranslationsAr });

  return (
    <>
      {t('navbar.brandName')}
      <span style={{ color: 'var(--accent-dark)' }}> {t('navbar.brandNameAccent')}</span>
    </>
  );
}

export default BrandName;
