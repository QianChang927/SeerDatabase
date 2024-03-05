package com.robot.app.task.petstory.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HitEggMacController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.HitEggMacController;
       
      
      private var _map:BaseMapProcess;
      
      private var _luokaiMC:MovieClip;
      
      public function HitEggMacController(param1:PrivateClass)
      {
         super();
      }
      
      public static function machineClick(param1:* = null) : void
      {
         getInstance().onHitEggMcCLick(null);
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.HitEggMacController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.HitEggMacController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this.onLineCheckItem();
      }
      
      public function onHitEggMcCLick(param1:*) : void
      {
         var _loc2_:Boolean = false;
         if(MapManager.currentMap.id == 103)
         {
            this.playStory();
            _loc2_ = Boolean(BufferRecordManager.getState(MainManager.actorInfo,506));
            if(_loc2_ == false)
            {
               return;
            }
         }
         SocketConnection.send(1022,86053745);
         CommonUI.removeYellowArrow(MapManager.currentMap.depthLevel["hitEggMC"]);
         ModuleManager.showModule(ClientConfig.getAppModule("HitEggMacPanel"),"正在打开面板");
      }
      
      public function onLineCheckItem() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onItemList);
         ItemManager.getCollection();
      }
      
      private function onItemList(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onItemList);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(300418);
         if(_loc2_)
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,this.onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,194);
            return;
         }
         var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(300419);
         if(_loc3_)
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,this.onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,195);
            return;
         }
         var _loc4_:SingleItemInfo;
         if(_loc4_ = ItemManager.getCollectionInfo(300420))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,this.onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,196);
            return;
         }
      }
      
      private function onExchange(param1:SocketEvent) : void
      {
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,this.onExchange);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_)
         {
            _loc7_ = _loc2_.readUnsignedInt();
            _loc8_ = _loc2_.readUnsignedInt();
            Alarm.show(_loc8_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc7_)) + "已经放入你的背包。");
            _loc6_++;
         }
         if(_loc3_ != 0)
         {
            GetPetController.getPet(_loc3_,_loc4_);
         }
      }
      
      private function playStory() : void
      {
         var mc:MovieClip = null;
         var hasPlay:Boolean = Boolean(BufferRecordManager.getState(MainManager.actorInfo,506));
         if(!hasPlay)
         {
            NpcController.npcVisible = false;
            ResourceManager.getResource(ClientConfig.getActiveUrl("hitEggMC"),function(param1:MovieClip):void
            {
               var obj:MovieClip = param1;
               _luokaiMC = obj;
               _luokaiMC.visible = true;
               KTool.hideMapPlayerAndMonster();
               MapManager.currentMap.depthLevel.visible = false;
               MapManager.currentMap.controlLevel.addChild(_luokaiMC);
               AnimateManager.playMcAnimate(_luokaiMC,1,"",function():void
               {
                  _luokaiMC.gotoAndStop(_luokaiMC.totalFrames);
                  dialogSwitch(1);
               });
            });
         }
      }
      
      public function destroy() : void
      {
         this._map = null;
      }
      
      private function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.SEER,["HI，罗开，又有什么好东西从火星港运来了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ROCKY,["这是火星港新研制的精灵神秘蛋，砸开以后100%可以获得各种精灵！"],["能送给我吗？"],[function():void
                  {
                     NpcDialog.show(NPC.ROCKY,["合成这神秘蛋的材料非常珍贵，需要花费少量的钻石才能买到，看到那的砸蛋机吗？如果你想获得精灵，赶紧看看去吧！"],null,null,false,function():void
                     {
                        if(_luokaiMC != null)
                        {
                           DisplayUtil.removeForParent(_luokaiMC);
                           _luokaiMC = null;
                        }
                        MapManager.currentMap.depthLevel.visible = true;
                        KTool.showMapPlayerAndMonster();
                        NpcController.npcVisible = true;
                        BufferRecordManager.setState(MainManager.actorInfo,506,true);
                        SocketConnection.send(1022,86053744);
                     });
                  }]);
               });
         }
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
