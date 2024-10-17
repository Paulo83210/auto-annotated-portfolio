import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '@/utils/seo-utils';
import { BackgroundImage } from '@/components/atoms';
import { Annotated } from '@/components/Annotated';
import { PageComponentProps } from '@/types';
import { PageModelType } from '@/types/generated';

type BaseLayoutProps = React.PropsWithChildren & PageComponentProps & PageModelType;

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
    const { global, ...page } = props;
    const { site } = global;

    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <Annotated content={page}>
            <div className={classNames('sb-page', page?.colors || 'colors-a')}>
                {page?.backgroundImage && <BackgroundImage {...page?.backgroundImage} />}
                <div className="sb-base sb-default-base-layout relative">
                    <Head>
                        <title>{title}</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

                        {metaDescription && <meta name="description" content={metaDescription} />}
                        {metaTags.map((metaTag) => {
                            if (metaTag.format === 'property') {
                                // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                                return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                            }
                            return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                        })}
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        {site.favicon && <link rel="icon" href={site.favicon} />}
                    </Head>
                    {site.header && (
                        <Annotated content={site}>
                            <Annotated content={site.header}>
                                <Header {...site.header} />
                            </Annotated>
                        </Annotated>
                    )}
                    {props.children}
                    {site.footer && (
                        <Annotated content={site}>
                            <Annotated content={site.footer}>
                                <Footer {...site.footer} />
                            </Annotated>
                        </Annotated>
                    )}
                </div>
            </div>
        </Annotated>
    );
};

export default BaseLayout;
