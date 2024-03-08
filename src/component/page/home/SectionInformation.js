import HorizontalLoopDataLogic from '@/common/list/HorizontalLoopDataLogic';
import { PageSubTitle, PageTitleMain } from '@/component/general/PageTitle';
import { objectListDetailCustom } from '@/config/objectListConfig';

const SectionInformation = ({ data = {} }) => {
  return (
    <section className="container">
      <PageTitleMain
        title="Prospect Contract"
        extraClass="text-center padding-title mb-0"
      />

      <div className="mb-4">
        <PageSubTitle
          title="Person in Charge"
          extraClass="border-bottom border-neutral-400"
        />

        <HorizontalLoopDataLogic
          list={[
            objectListDetailCustom('Name', 'Demo Customer Name'),
            objectListDetailCustom('Address', 'Jl Kerobokan 388x'),
            objectListDetailCustom('Phone Number', '+6292930930'),
            objectListDetailCustom('Email Address', 'demo@app.net'),
            objectListDetailCustom('Identification Number', 'PR93929303'),
          ]}
          config={{
            titleColumn: 'col-md-4',
            contentColumn: 'col-md-8',
          }}
        />
      </div>

      <div className="mb-4">
        <PageSubTitle
          title="Company Infomation"
          extraClass="border-bottom border-neutral-400"
        />

        <HorizontalLoopDataLogic
          list={[
            objectListDetailCustom('Company Name', 'GX Jaya'),
            objectListDetailCustom('Company Address', 'Demo'),
          ]}
          config={{
            titleColumn: 'col-md-4',
            contentColumn: 'col-md-8',
          }}
        />
      </div>

      <div className="mb-4">
        <PageSubTitle
          title="Service Location Information"
          extraClass="border-bottom border-neutral-400"
        />

        <HorizontalLoopDataLogic
          list={[
            objectListDetailCustom('Location Nickname', 'Villa Deg'),
            objectListDetailCustom(
              'Service Location Address',
              'Jl Kerobokan x838939839838939839829833939889494390943490943903490',
            ),
            objectListDetailCustom('Property Ownership', 'Contract'),
            objectListDetailCustom('Building Type', 'Villa'),
          ]}
          config={{
            titleColumn: 'col-md-4',
            contentColumn: 'col-md-8',
          }}
        />
      </div>

      <div className="mb-4">
        <PageSubTitle
          title="Subscription Information"
          extraClass="border-bottom border-neutral-400"
        />

        <HorizontalLoopDataLogic
          list={[
            objectListDetailCustom('Package Name', 'Xtreme Lite 100 MBPS SOHO'),
            objectListDetailCustom('Recurring Fee', 'Rp 1.000.000.000'),
            objectListDetailCustom('Setup Fee', 'Rp 500.000'),
            objectListDetailCustom('Maintenance Fee', 'Rp 0'),
            objectListDetailCustom('Proforma Invoice Number', 'PNV0001'),
            objectListDetailCustom(
              'Ammount Due Before Activation',
              'Rp 2.000.000',
            ),
          ]}
          config={{
            titleColumn: 'col-md-4',
            contentColumn: 'col-md-8',
          }}
        />
      </div>

      <div className="mb-5">
        <PageSubTitle
          title="Statement"
          extraClass="border-bottom border-neutral-400"
        />

        <p className="fs-20 fw-500 mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  );
};

export default SectionInformation;
