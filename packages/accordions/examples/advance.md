### Accordion

The Accordion component is implemented using the [W3C Accordion pattern](https://www.w3.org/TR/wai-aria-practices/#accordion).

#### Uncontrolled usage

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label, Range } = require('@zendeskgarden/react-forms/src');

const UncontrolledExample = () => {
  const [isCollapsible, setIsCollapsible] = React.useState(false);
  const [isExpandable, setIsExpandable] = React.useState(false);

  return (
    <Grid>
      <Well isRecessed>
        <Row>
          <Col>
            <Field className="u-mt">
              <Toggle checked={isCollapsible} onChange={event => setIsCollapsible(!isCollapsible)}>
                <Label>Collapsible</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isExpandable} onChange={event => setIsExpandable(!isExpandable)}>
                <Label>Expandable</Label>
              </Toggle>
            </Field>
          </Col>
        </Row>
      </Well>
      <Row className="u-mt">
        <Col>
          <Accordion level={3} isCollapsible={isCollapsible} isExpandable={isExpandable}>
            <Accordion.Section>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Accordion.Header label="Turnip greens yarrow">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      console.log('nooo');
                    }}
                  >
                    Menu button
                  </button>
                </Accordion.Header>
              </div>
              <Accordion.Panel>
                <div>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                  amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
                  Celery potato scallion desert raisin horseradish spinach carrot soko.
                </div>
                <div>
                  Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard
                  seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water
                  chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header label="Corn amaranth salsify" />
              <Accordion.Panel>
                <div>
                  Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
                  artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
                  quandong celery.
                </div>
                <div>
                  Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea
                  lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut
                  pea sierra leone bologi leek soko chicory celtuce parsley jícama.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header label="Celery quandong swiss" />
              <Accordion.Panel>
                <div>
                  Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
                  garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed
                  kombu beetroot horseradish carrot squash brussels sprout chard.
                </div>
                <div>
                  Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                  azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard
                  greens avocado quandong fennel gumbo black-eyed pea.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header label="Grape silver beet" />
              <Accordion.Panel>
                <div>
                  Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
                  purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut
                  summer purslane earthnut pea tomato spring onion azuki bean gourd.
                </div>
                <div>
                  Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter
                  purslane silver beet rock melon radish asparagus spinach.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header label="Soko radicchio bunya" />
              <Accordion.Panel>
                <div>
                  Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                  sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify
                  chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra
                  leone bologi rutabaga tigernut.
                </div>
                <div>
                  Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
                  broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama
                  garlic courgette coriander radicchio plantain scallion cauliflower fava bean
                  desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava
                  bean leek dandelion silver beet eggplant bush.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
          </Accordion>
        </Col>
      </Row>
    </Grid>
  );
};

<UncontrolledExample />;
```
