package com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.control.ResistanceSysController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.PetStatusEffectConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class ResistanceModule extends PetBagSubModule
   {
       
      
      public function ResistanceModule()
      {
         super();
         initUi("resistance");
         _ui.gotoAndStop(1);
         StatManager.sendStat2014("2019新背包","切换至抗性标签",StatManager.SYSTEM);
         this.onFocusPetChange();
      }
      
      override protected function onFocusPetChange() : void
      {
         var ename:String = null;
         var idx:int = 0;
         var i:int = 0;
         _ui.gotoAndStop(3);
         setPanelEnable(_ui,focusPet != null);
         if(focusPet == null)
         {
            return;
         }
         if(focusPet.resistanceinfo.resist_state == 0)
         {
            _ui.gotoAndStop(3);
         }
         else if(focusPet.resistanceinfo.resist_state == 1)
         {
            _ui.gotoAndStop(2);
         }
         else
         {
            _ui.gotoAndStop(1);
            CommonUI.resetUiAllTxtFont(_ui);
            _ui["cirt"].text = ResistanceSysController.getResistanceByLevel(0,focusPet.resistanceinfo["cirt"]).present + focusPet.resistanceinfo.cirt_adj + "%";
            _ui["regular"].text = ResistanceSysController.getResistanceByLevel(0,focusPet.resistanceinfo["regular"]).present + focusPet.resistanceinfo.regular_adj + "%";
            _ui["precent"].text = ResistanceSysController.getResistanceByLevel(0,focusPet.resistanceinfo["precent"]).present + focusPet.resistanceinfo.precent_adj + "%";
            for(i = 1; i < 4; i++)
            {
               ename = String(PetStatusEffectConfig.getName(0,focusPet.resistanceinfo["ctl_" + i + "_idx"]));
               _ui["ctlname_" + i].text = "免疫" + ename + "：";
               ename = String(PetStatusEffectConfig.getName(0,focusPet.resistanceinfo["weak_" + i + "_idx"]));
               _ui["weakname_" + i].text = "免疫" + ename + "：";
               _ui["ctl_" + i].text = ResistanceSysController.getResistanceByLevel(1,focusPet.resistanceinfo["ctl_" + i]).present + focusPet.resistanceinfo["ctl_" + i + "_adj"] + focusPet.resistanceinfo.resist_all + "%";
               _ui["weak_" + i].text = ResistanceSysController.getResistanceByLevel(1,focusPet.resistanceinfo["weak_" + i]).present + focusPet.resistanceinfo["weak_" + i + "_adj"] + focusPet.resistanceinfo.resist_all + "%";
               idx = int(focusPet.resistanceinfo["ctl_" + i + "_idx"]);
               _ui["ctlitem_" + i].gotoAndStop(1);
               this.getAbnormalIcon(idx,_ui["ctlitem_" + i]);
               idx = int(focusPet.resistanceinfo["weak_" + i + "_idx"]);
               _ui["weakitem_" + i].gotoAndStop(1);
               this.getAbnormalIcon(idx,_ui["weakitem_" + i]);
            }
         }
      }
      
      override public function destory() : void
      {
         for(var i:int = 1; i < 4; i++)
         {
            if(Boolean(_ui["ctlitem_" + i]))
            {
               DisplayUtil.removeAllChild(_ui["ctlitem_" + i]);
            }
            if(Boolean(_ui["weakitem_" + i]))
            {
               DisplayUtil.removeAllChild(_ui["weakitem_" + i]);
            }
         }
         super.destory();
      }
      
      private function getAbnormalIcon(id:int, container:MovieClip) : void
      {
         var icon:Sprite = null;
         DisplayUtil.removeAllChild(container);
         var url:String = String(ClientConfig.getResPath("battleEffect/abnormal/" + id + ".swf"));
         icon = KTool.getIcon(url,17,new Point(0,0)) as Sprite;
         icon.x = 8.5;
         icon.y = 10;
         container.addChild(icon);
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         switch(e.target.name)
         {
            case "go":
               ModuleManager.showModule(ClientConfig.getAppModule("TitanStonePanel"));
               break;
            case "go2":
               ModuleManager.showModule(ClientConfig.getAppModule("SeerOnlineSendGiftPanel2015"));
               break;
            case "resistanceStrengthenBtn":
               ModuleManager.showAppModule("ResistanceStrengthenPanel2022",{
                  "p":focusPet,
                  "idx":0
               });
               break;
            case "resistanceExchangeBtn":
               ModuleManager.showAppModule("ResistanceExchangePanel2022",{
                  "p":focusPet,
                  "idx":-1
               });
               break;
            case "kezhi":
               break;
            case "unlock":
               closeEvent();
               ItemManager.updateItems([1706826]).then(function():Promise
               {
                  if(ItemManager.getNumByID(1706826) <= 0)
                  {
                     Alarm2.show("泰坦神石数量不足！");
                     return Deferred.reject(null);
                  }
                  return Deferred.resolve(null);
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(CommandID.RESISTANCE_OPEN,[focusPet.catchTime,3]);
               }).then(function():void
               {
                  PetManager.upDateBagPetInfo(focusPet.catchTime);
               }).always(openEvent);
         }
      }
   }
}
