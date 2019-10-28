[@iabtcf/core - API Documentation](../README.md) > [CoreTCEncoder](../classes/coretcencoder.md)

# Class: CoreTCEncoder

## Hierarchy

**CoreTCEncoder**

## Implements

* [Encoder](../interfaces/encoder.md)<[TCModel](tcmodel.md)>

## Index

### Methods

* [decode](coretcencoder.md#decode)
* [encode](coretcencoder.md#encode)

---

## Methods

<a id="decode"></a>

###  decode

▸ **decode**(encodedString: *`string`*, tcModel: *[TCModel](tcmodel.md)*): [TCModel](tcmodel.md)

*Implementation of [Encoder](../interfaces/encoder.md).[decode](../interfaces/encoder.md#decode)*

*Defined in [encoder/CoreTCEncoder.ts:56](https://github.com/chrispaterson/iabtcf-es/blob/5097780/modules/core/src/encoder/CoreTCEncoder.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encodedString | `string` |
| tcModel | [TCModel](tcmodel.md) |

**Returns:** [TCModel](tcmodel.md)

___
<a id="encode"></a>

###  encode

▸ **encode**(tcModel: *[TCModel](tcmodel.md)*): `string`

*Defined in [encoder/CoreTCEncoder.ts:25](https://github.com/chrispaterson/iabtcf-es/blob/5097780/modules/core/src/encoder/CoreTCEncoder.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tcModel | [TCModel](tcmodel.md) |

**Returns:** `string`

___
