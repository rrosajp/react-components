The `Accordion` component is implemented using the [W3C Radio Group pattern](https://www.w3.org/TR/wai-aria-practices/#radiobutton).
Each `Tile` may be treated as an individual radio input.

### Components

- `Accordion.Tile` Accepts all `div` attributes and the following props:
  - [`value`] The value of the `input`
  - [`disabled`] Whether the `Tile` is disabled
- `Accordion.Icon` Accepts all `span` attributes
- `Accordion.Label` Accepts all `span` attributes
- `Accordion.Description` Accepts all `span` attributes

### Layout

The `Accordion` component provides no layout or responsive styling. For a responsive layout
we use our [@zendeskgarden/react-grid package](https://garden.zendesk.com/react-components/grid/)
in the examples below.

```jsx
const DocumentIcon = require('@zendeskgarden/svg-icons/src/16/file-document-stroke.svg').default;
const ImageIcon = require('@zendeskgarden/svg-icons/src/16/file-image-stroke.svg').default;
const PresentationIcon = require('@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg')
  .default;
const SpreadsheetIcon = require('@zendeskgarden/svg-icons/src/16/file-spreadsheet-stroke.svg')
  .default;
const FolderOpenIcon = require('@zendeskgarden/svg-icons/src/16/folder-open-stroke.svg').default;

<Accordion name="basic-example" aria-label="Example radio group selection">
  <Grid>
    <Row>
      <Col lg={3} md={4} sm={6}>
        <Accordion.Tile value="document">
          <Accordion.Icon>
            <DocumentIcon />
          </Accordion.Icon>
          <Accordion.Label>Document</Accordion.Label>
        </Accordion.Tile>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Accordion.Tile value="image">
          <Accordion.Icon>
            <ImageIcon />
          </Accordion.Icon>
          <Accordion.Label>Image</Accordion.Label>
        </Accordion.Tile>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Accordion.Tile value="presentation">
          <Accordion.Icon>
            <PresentationIcon />
          </Accordion.Icon>
          <Accordion.Label>Presentation</Accordion.Label>
        </Accordion.Tile>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Accordion.Tile value="spreadsheet">
          <Accordion.Icon>
            <SpreadsheetIcon />
          </Accordion.Icon>
          <Accordion.Label>Spreadsheet</Accordion.Label>
        </Accordion.Tile>
      </Col>
      <Col lg={3} md={4} sm={6}>
        <Accordion.Tile value="folder">
          <Accordion.Icon>
            <FolderOpenIcon />
          </Accordion.Icon>
          <Accordion.Label>Folder</Accordion.Label>
        </Accordion.Tile>
      </Col>
    </Row>
  </Grid>
</Accordion>;
```

### Advanced Usage

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const ChevronIcon = require('@zendeskgarden/svg-icons/src/16/chevron-box-stroke.svg').default;
const CheckboxDoubleIcon = require('@zendeskgarden/svg-icons/src/16/check-box-double-stroke.svg')
  .default;
const TextIcon = require('@zendeskgarden/svg-icons/src/16/text-stroke.svg').default;
const MultilineIcon = require('@zendeskgarden/svg-icons/src/16/multiline-stroke.svg').default;
const CheckIcon = require('@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg').default;
const NumberIcon = require('@zendeskgarden/svg-icons/src/16/number-stroke.svg').default;
const DecimalIcon = require('@zendeskgarden/svg-icons/src/16/decimal-stroke.svg').default;
const CalendarIcon = require('@zendeskgarden/svg-icons/src/16/calendar-stroke.svg').default;
const CreditCardIcon = require('@zendeskgarden/svg-icons/src/16/credit-card-stroke.svg').default;
const AsteriskIcon = require('@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg').default;

const items = [
  { value: 'dropdown', label: 'Dropdown', icon: <ChevronIcon /> },
  { value: 'multiselect', label: 'Multiselect', icon: <CheckboxDoubleIcon /> },
  { value: 'text', label: 'Text', icon: <TextIcon /> },
  { value: 'multiline', label: 'Multiline', icon: <MultilineIcon /> },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckIcon /> },
  { value: 'numeric', label: 'Numeric', icon: <NumberIcon /> },
  { value: 'decimal', label: 'Decimal', icon: <DecimalIcon /> },
  { value: 'date', label: 'Date', icon: <CalendarIcon /> },
  { value: 'credit-card', label: 'Credit card', icon: <CreditCardIcon /> },
  { value: 'wildcard', label: 'Wildcard', icon: <AsteriskIcon /> }
];

initialState = {
  isCentered: true,
  disabled: false
};

<div>
  <Well isRecessed className="u-mb">
    <Grid>
      <Row>
        <Col>
          <Field>
            <Toggle
              checked={!!state.isCentered}
              onChange={event => setState({ isCentered: event.target.checked })}
            >
              <Label>Centered</Label>
            </Toggle>
          </Field>
        </Col>
        <Col>
          <Field>
            <Toggle
              checked={!!state.disabled}
              onChange={event => setState({ disabled: event.target.checked })}
            >
              <Label>Disabled</Label>
            </Toggle>
          </Field>
        </Col>
      </Row>
    </Grid>
  </Well>
  <Accordion
    name="example"
    aria-label="Example radio group selection"
    isCentered={state.isCentered}
  >
    <Grid>
      <Row>
        {items.map(item =>
          !state.isCentered ? (
            <Col key={item.value} sm={12}>
              <Accordion.Tile value={item.value} disabled={state.disabled}>
                <Accordion.Icon>{item.icon}</Accordion.Icon>
                <Accordion.Label>{item.label}</Accordion.Label>
                <Accordion.Description>
                  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
                  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                </Accordion.Description>
              </Accordion.Tile>
            </Col>
          ) : (
            <Col key={item.value} xl={2} lg={3} md={4} xs={6}>
              <Accordion.Tile value={item.value} disabled={state.disabled}>
                <Accordion.Icon>{item.icon}</Accordion.Icon>
                <Accordion.Label>{item.label}</Accordion.Label>
              </Accordion.Tile>
            </Col>
          )
        )}
      </Row>
    </Grid>
  </Accordion>
</div>;
```
