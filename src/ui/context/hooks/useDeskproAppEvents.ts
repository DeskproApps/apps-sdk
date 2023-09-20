import { useEffect, DependencyList } from "react";
import { DeskproAppEventHooks, DeskproAppEventType } from "../types";
import { Context, TargetAction, TargetElementEvent } from "../../../client/types";

export const useDeskproAppEvents = (hooks: DeskproAppEventHooks, deps: DependencyList = []) => {
  useEffect(() => {
    const onReady = ((event: CustomEvent<Context>) => {
      hooks.onReady && hooks.onReady(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.READY, onReady);

    const onShow = ((event: CustomEvent<Context>) => {
      hooks.onShow && hooks.onShow(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.SHOW, onShow);

    const onChange = ((event: CustomEvent<Context>) => {
      hooks.onChange && hooks.onChange(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.CHANGE, onChange);

    const onTargetAction = ((event: CustomEvent<TargetAction>) => {
      hooks.onTargetAction && hooks.onTargetAction(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.TARGET_ACTION, onTargetAction);

    const onTargetElementEvent = ((event: CustomEvent<TargetElementEvent>) => {
      hooks.onElementEvent &&
      hooks.onElementEvent(event.detail.id, event.detail.type, event.detail.payload);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.TARGET_ELEMENT_EVENT, onTargetElementEvent);

    const onAdminSettingsChange = ((event: CustomEvent<Record<string, any>>) => {
      hooks.onAdminSettingsChange && hooks.onAdminSettingsChange(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.ADMIN_SETTINGS_CHANGE, onAdminSettingsChange);

    return () => {
      document.removeEventListener(DeskproAppEventType.READY, onReady);
      document.removeEventListener(DeskproAppEventType.SHOW, onShow);
      document.removeEventListener(DeskproAppEventType.CHANGE, onChange);
      document.removeEventListener(DeskproAppEventType.TARGET_ACTION, onTargetAction);
      document.removeEventListener(DeskproAppEventType.TARGET_ELEMENT_EVENT, onTargetElementEvent);
      document.removeEventListener(
        DeskproAppEventType.ADMIN_SETTINGS_CHANGE,
        onAdminSettingsChange
      );
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
