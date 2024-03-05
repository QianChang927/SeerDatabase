package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   
   public class CardCoolStarsController
   {
      
      private static var _itemNum:int;
      
      private static var _doneNum:int;
      
      private static var _isOpenFree:Boolean;
      
      private static var _map:MapModel;
       
      
      public function CardCoolStarsController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         _map = MapManager.currentMap;
         update();
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(KTool.getIndex(event.target));
         switch(event.target.name)
         {
            case "closeBtn":
               MapManager.changeMap(1);
               break;
            case "btn_" + index:
               if(_isOpenFree)
               {
                  KTool.getMultiValue([18532],function(param1:Array):void
                  {
                     var va:Array = param1;
                     if(BitUtils.getBit(va[0],index) > 0)
                     {
                        update();
                        ModuleManager.showModule(ClientConfig.getAppModule("CardCoolStarsChouQuPanel"),"正在打开....",index);
                     }
                     else
                     {
                        Alert.show("每天只可免费抽取一个龙将的魂魄，明日可免费继续，是否继续？",function():void
                        {
                           KTool.buyProductByCallback(253201,1,function():void
                           {
                              SocketConnection.sendWithCallback(42366,function():void
                              {
                                 update();
                                 ModuleManager.showModule(ClientConfig.getAppModule("CardCoolStarsChouQuPanel"),"正在打开....",index);
                              },10,index + 1);
                           });
                        });
                     }
                  });
               }
               else
               {
                  Alert.show("每天只能免费抽取一位龙将的魂魄，是否继续？",function():void
                  {
                     SocketConnection.sendWithCallback(42366,function():void
                     {
                        update();
                        ModuleManager.showModule(ClientConfig.getAppModule("CardCoolStarsChouQuPanel"),"正在打开....",index);
                     },10,index + 1);
                  });
               }
               break;
            case "eqBtn":
               if(_doneNum >= 4)
               {
                  SocketConnection.sendWithCallback(42366,function():void
                  {
                     update();
                  },12,0);
               }
               else
               {
                  Alarm2.show("必须抽取全部4位龙将的魂魄后，放可开启卡酷星之魂！");
               }
         }
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([101493,18532],function(param1:Array):void
         {
            _doneNum = 0;
            _isOpenFree = false;
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               if(BitUtils.getBit(param1[0],_loc2_) > 0)
               {
                  ++_doneNum;
                  CommonUI.setEnabled(_map.controlLevel["btn_" + _loc2_],false,true);
                  _map.controlLevel["mc_" + _loc2_].visible = false;
                  _map.controlLevel["flag_" + _loc2_].visible = true;
               }
               else
               {
                  CommonUI.setEnabled(_map.controlLevel["btn_" + _loc2_],true,false);
                  _map.controlLevel["mc_" + _loc2_].visible = true;
                  _map.controlLevel["flag_" + _loc2_].visible = false;
               }
               if(BitUtils.getBit(param1[1],_loc2_) > 0)
               {
                  _isOpenFree = true;
               }
               _loc2_++;
            }
            if(BitUtils.getBit(param1[0],4) > 0)
            {
               _map.controlLevel["mc_" + 4].visible = false;
               CommonUI.setEnabled(_map.controlLevel["eqBtn"],false,true);
            }
            else
            {
               CommonUI.setEnabled(_map.controlLevel["eqBtn"],true,false);
            }
         });
      }
      
      public static function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
   }
}
