import {expect} from 'chai';
import * as sinon from 'sinon';
import {XMLHttpTestTools} from '@didomi/iabtcf-testing';
import {GVL} from '../src/GVL';
import {VendorList} from '../src/model/gvl';

const FEATURES_TEXT = 'These means of processing can be used solely in pursuit of one or several purposes for which you are given a choice in this notice.';
const FEATURES_TEXT_FR = 'Ces moyens de traitement peuvent etre utilises uniquement dans le cadre d une ou plusieurs finalites pour lesquelles un choix vous est propose dans la presente notice.';

const vendorList = (standardTexts?: VendorList['standardTexts']): VendorList => ({
  gvlSpecificationVersion: 3,
  vendorListVersion: 177,
  tcfPolicyVersion: 5,
  lastUpdated: '2026-09-23T00:00:00Z',
  purposes: {},
  specialPurposes: {},
  features: {},
  specialFeatures: {},
  stacks: {},
  vendors: {},
  ...(standardTexts ? {standardTexts} : {}),
});

describe('GVLStandardTexts', (): void => {

  beforeEach((): void => {

    XMLHttpTestTools.beforeEach();
    GVL.emptyCache();
    GVL.emptyLanguageCache();
    GVL.baseUrl = '';

  });

  afterEach((): void => {

    GVL.baseUrl = '';
    GVL.emptyCache();
    GVL.emptyLanguageCache();

  });

  it('should populate standardTexts.features from a TCF 2.4 GVL', (): void => {

    const json = vendorList({features: FEATURES_TEXT});
    const gvl: GVL = new GVL(json);

    expect(gvl.standardTexts, 'gvl.standardTexts').to.deep.equal(json.standardTexts);
    expect(gvl.getJson().standardTexts, 'gvl.getJson().standardTexts').to.deep.equal(json.standardTexts);

  });

  it('should leave standardTexts undefined when the GVL does not include it', (): void => {

    const gvl: GVL = new GVL(vendorList());

    expect(gvl.standardTexts, 'gvl.standardTexts').to.equal(undefined);
    expect(gvl.getJson().standardTexts, 'gvl.getJson().standardTexts').to.equal(undefined);

  });

  it('should replace standardTexts.features when changeLanguage() is called', async (): Promise<void> => {

    GVL.baseUrl = 'http://sweetcmp.com';

    const gvl: GVL = new GVL(vendorList({features: FEATURES_TEXT}));

    expect(gvl.standardTexts.features, 'gvl.standardTexts.features').to.equal(FEATURES_TEXT);

    const changePromise = gvl.changeLanguage('fr');
    const req: sinon.SinonFakeXMLHttpRequest = XMLHttpTestTools.requests[0];

    req.respond(200, XMLHttpTestTools.JSON_HEADER, JSON.stringify({
      purposes: {},
      specialPurposes: {},
      features: {},
      specialFeatures: {},
      stacks: {},
      standardTexts: {
        features: FEATURES_TEXT_FR,
      },
    }));

    await changePromise;

    expect(gvl.standardTexts.features, 'gvl.standardTexts.features').to.equal(FEATURES_TEXT_FR);

  });

});
