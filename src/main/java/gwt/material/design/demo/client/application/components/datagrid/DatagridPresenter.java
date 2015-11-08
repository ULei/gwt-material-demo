package gwt.material.design.demo.client.application.components.datagrid;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import gwt.material.design.demo.client.application.ApplicationPresenter;
import gwt.material.design.demo.client.event.SetPageTitleEvent;
import gwt.material.design.demo.client.place.NameTokens;

public class DatagridPresenter extends Presenter<DatagridPresenter.MyView, DatagridPresenter.MyProxy> {
    interface MyView extends View {
    }

    @NameToken(NameTokens.datagrid)
    @ProxyCodeSplit
    interface MyProxy extends ProxyPlace<DatagridPresenter> {
    }

    @Inject
    DatagridPresenter(
            EventBus eventBus,
            MyView view,
            MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.SLOT_MainContent);
    }

    @Override
    protected void onReveal() {
        super.onReveal();

        SetPageTitleEvent.fire("Data Grid", "DataGrid or Tables are a nice way to organize a lot of data. " +
            "We provide a few utility classes to help you style your table as easily as possible. In addition, " +
            "to improve mobile experience, all tables on mobile-screen widths are centered automatically.", this);
    }
}
