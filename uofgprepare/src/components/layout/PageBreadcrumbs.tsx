import { useMemorizedBreadcrumbs } from '@/helpers/routesHelper';
import { nextDynamicPath }from '@/helpers/validationHelper';
import { Breadcrumbs, Button, Text } from "@mantine/core";
import{ useMediaQuery } from '@mantine/hooks';
import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { text } from 'stream/consumers';

export const PageBreadcrumbs = () => {
    const router =useRouter();
    const breadcrumbs = useMemorizedBreadcrumbs(router);
    const shouldRenderBreadcrumbs = router.asPath !== '/homepage/';

    return (
        <>
            {shouldRenderBreadcrumbs && (
                <MediaQuerey smallerThan ="md" styles={{ display: 'none'}}>
                    <Breadcrumbs
                        separator="/"
                        styles={{ separator: {margin: '0 5px'} }}
                    >
                        {breadcrumbs.map((breadcrumb, index) =>
                            index + 1 === breadcrumbs.length && router.asPath !== '/' ? (
                                !nextDynamicPath.test(breadcrumb.text) && (
                                    <Text key={breadcrumb.text} size="sm" ml={8} weight={500}>
                                        {breadcrumb.text}
                                    </Text>
                                )
                            ) : (
                                <Button
                                    variant="subtle"
                                    key={breadcrumb.text}
                                    component={Link}
                                    href={breadcrumb.href}
                                    color="primary"
                                    size="sm"
                                    sx={{ fontweight: 400 }}
                                    compact
                                >
                                    {breadcrumb.text}
                                </Button>
                            )
                        )}
                    </Breadcrumbs>
                </MediaQuerey>
            )}
        </>
    )
}