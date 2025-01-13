import { Button, Card, Tooltip } from '@components/atoms';
import { Section } from '@components/organasims';
import { PageLayout } from '@components/tamplates';

const TooltipPage = () => {
  return (
    <PageLayout title={'Tooltip'}>
      <Section>
        <Card>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <Tooltip title="This is Top Left Tooltip" placement="topLeft">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Top Left
              </Button>
            </Tooltip>
            <Tooltip title="This is Top Tooltip" placement="top">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Top
              </Button>
            </Tooltip>
            <Tooltip title="This is Top Right Tooltip" placement="topRight">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Top Right
              </Button>
            </Tooltip>
            <Tooltip title="This is Left Tooltip" placement="left">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Left
              </Button>
            </Tooltip>
            <div />
            <Tooltip title="This is Right Tooltip" placement="right">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Right
              </Button>
            </Tooltip>
            <Tooltip title="This is Bottom Left Tooltip" placement="bottomLeft">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Bottom Left
              </Button>
            </Tooltip>
            <Tooltip title="This is Bottom Tooltip" placement="bottom">
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip
              title="This is Bottom Left Tooltip"
              placement="bottomRight"
            >
              <Button fullWidth buttonStyle="soft" buttonColor="rose">
                Bottom Right
              </Button>
            </Tooltip>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TooltipPage;
