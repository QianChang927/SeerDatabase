package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class LoginPayChecker
   {
       
      
      public function LoginPayChecker()
      {
         super();
      }
      
      public static function setup() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onItemList);
      }
      
      private static function onItemList(param1:ItemEvent) : void
      {
         var id:int = 0;
         var exchangeId:int = 0;
         var itemObj:Object = null;
         var skinId:int = 0;
         var event:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onItemList);
         for each(id in ItemXMLInfo.MIDLE_ITEM_LIST)
         {
            if(ItemManager.containsCollection(id))
            {
               exchangeId = int(ItemXMLInfo.getExchangeId(id));
               if(exchangeId > 0)
               {
                  if(ItemManager.getNumByID(id) > 1)
                  {
                     KTool.doMultiExchange(exchangeId,ItemManager.getNumByID(id));
                  }
                  else
                  {
                     KTool.doExchange(exchangeId);
                  }
                  return;
               }
               itemObj = ItemXMLInfo.getItemObj(id);
               if(itemObj != null)
               {
                  skinId = int(itemObj["SkinId"]);
                  if(skinId > 0)
                  {
                     SocketConnection.send(47315,id);
                     return;
                  }
               }
            }
         }
         if(ItemManager.containsCollection(1200631))
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,749);
         }
         if(ItemManager.containsCollection(1200632))
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,757);
         }
         if(ItemManager.containsCollection(1200619))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,741);
         }
         if(ItemManager.containsCollection(1200620))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,742);
         }
         if(ItemManager.containsCollection(1200623))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,743);
         }
         if(ItemManager.containsCollection(1200617))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,746);
         }
         if(ItemManager.containsCollection(1200618))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,747);
         }
         if(ItemManager.containsCollection(1200498))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,623);
         }
         if(ItemManager.containsCollection(1200499))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,624);
         }
         if(ItemManager.containsCollection(1200500))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,625);
         }
         if(ItemManager.containsCollection(1200501))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,626);
         }
         if(ItemManager.containsCollection(300418))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,194);
         }
         if(ItemManager.containsCollection(300419))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,195);
         }
         if(ItemManager.containsCollection(300420))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,196);
         }
         if(ItemManager.containsCollection(300440))
         {
            SocketConnection.addCmdListener(CommandID.RICHBEASTLOYALTY_EXCHANGE,onExchangeRickBeast);
            SocketConnection.send(CommandID.RICHBEASTLOYALTY_EXCHANGE,1);
         }
         else if(ItemManager.containsCollection(300441))
         {
            SocketConnection.addCmdListener(CommandID.RICHBEASTLOYALTY_EXCHANGE,onExchangeRickBeast);
            SocketConnection.send(CommandID.RICHBEASTLOYALTY_EXCHANGE,2);
         }
         else if(ItemManager.containsCollection(300442))
         {
            SocketConnection.addCmdListener(CommandID.RICHBEASTLOYALTY_EXCHANGE,onExchangeRickBeast);
            SocketConnection.send(CommandID.RICHBEASTLOYALTY_EXCHANGE,3);
         }
         else if(ItemManager.containsCollection(300443))
         {
            SocketConnection.addCmdListener(CommandID.RICHBEASTLOYALTY_EXCHANGE,onExchangeRickBeast);
            SocketConnection.send(CommandID.RICHBEASTLOYALTY_EXCHANGE,4);
         }
         else if(ItemManager.containsCollection(300412))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,139);
         }
         else if(ItemManager.containsCollection(300382))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,66);
         }
         else if(ItemManager.containsCollection(300383))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,67);
         }
         else if(ItemManager.containsCollection(300384))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,68);
         }
         else if(ItemManager.containsCollection(300385))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,69);
         }
         else if(ItemManager.containsCollection(400924))
         {
            envolution(1);
         }
         else if(ItemManager.containsCollection(1200072))
         {
            envolution(2);
         }
         else if(ItemManager.containsCollection(400970))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,204);
         }
         else if(ItemManager.containsCollection(400971))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,205);
         }
         else if(ItemManager.containsCollection(400975))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,206);
         }
         else if(ItemManager.containsCollection(400976))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,207);
         }
         else if(ItemManager.containsCollection(400995))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,208);
         }
         else if(ItemManager.containsCollection(1200201))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,145);
         }
         else if(ItemManager.containsCollection(1200196))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,262);
         }
         else if(ItemManager.containsCollection(1200197))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,263);
         }
         else if(ItemManager.containsCollection(1200198))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,264);
         }
         else if(ItemManager.containsCollection(1200199))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,265);
         }
         else if(ItemManager.containsCollection(300630))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,450);
         }
         else if(ItemManager.containsCollection(300631))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,451);
         }
         else if(ItemManager.containsCollection(1200370))
         {
            SocketConnection.send(CommandID.RUNAWAY_SARUIKA_WAKE,1);
         }
         else if(ItemManager.containsCollection(1200371))
         {
            SocketConnection.send(CommandID.RUNAWAY_SARUIKA_WAKE,2);
         }
         else if(ItemManager.containsCollection(1200426))
         {
            KTool.doExchange(555);
         }
         else if(ItemManager.containsCollection(1200427))
         {
            KTool.doExchange(556);
         }
         else if(ItemManager.containsCollection(1200475))
         {
            SocketConnection.send(CommandID.MYSTERY_TEAM_FINISH_BY_MIBI,3);
         }
         else if(ItemManager.containsCollection(1200476))
         {
            SocketConnection.send(CommandID.MYSTERY_TEAM_FINISH_BY_MIBI,1);
         }
         else if(ItemManager.containsCollection(1200477))
         {
            SocketConnection.send(CommandID.MYSTERY_TEAM_FINISH_BY_MIBI,2);
         }
         else if(ItemManager.containsCollection(1200509))
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,608);
         }
         else if(ItemManager.containsCollection(1200510))
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,609);
         }
         else if(ItemManager.containsCollection(1200551))
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,687);
         }
         else if(ItemManager.containsCollection(1200601))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,709);
         }
         else if(ItemManager.containsCollection(1200602))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,710);
         }
         else if(ItemManager.containsCollection(1200603))
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,711);
         }
         else if(ItemManager.containsCollection(1200629))
         {
            KTool.doExchange(758);
         }
         else if(ItemManager.containsCollection(1200661))
         {
            KTool.doExchange(845);
         }
         else if(ItemManager.containsCollection(1200662))
         {
            KTool.doExchange(846);
         }
         else if(ItemManager.containsCollection(1200663))
         {
            KTool.doExchange(847);
         }
         else if(ItemManager.containsCollection(1200659))
         {
            KTool.doExchange(849,function():void
            {
               Alarm.show("恭喜你获得10个雷电之力！");
            });
         }
         else if(ItemManager.containsCollection(1200660))
         {
            KTool.doExchange(850,function():void
            {
               Alarm.show("恭喜你获得50个雷电之力！");
            });
         }
         else if(ItemManager.containsCollection(1200722))
         {
            KTool.doExchange(1065);
         }
         else if(ItemManager.containsCollection(1200851))
         {
            KTool.doExchange(1056);
         }
         else if(ItemManager.containsCollection(1200852))
         {
            KTool.doExchange(1057);
         }
         else if(ItemManager.containsCollection(1200853))
         {
            KTool.doExchange(1058);
         }
         else if(ItemManager.containsCollection(1200854))
         {
            KTool.doExchange(1059);
         }
         else if(ItemManager.containsCollection(1200855))
         {
            KTool.doExchange(1060);
         }
         else if(ItemManager.containsCollection(1200856))
         {
            KTool.doExchange(1061);
         }
         else if(ItemManager.containsCollection(1200857))
         {
            KTool.doExchange(1062);
         }
      }
      
      private static function onFinishRide(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.OPEN_TIGER,onFinishRide);
         MainManager.actorInfo.openJixieTacoLyn = true;
         PetManager.hidePet();
         Alarm.show("恭喜你机械塔克林坐骑功能激活成功！");
      }
      
      private static function onExchangeRickBeast(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.RICHBEASTLOYALTY_EXCHANGE,onExchangeRickBeast);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ != 0)
         {
            ItemInBagAlert.show(_loc3_,"1个" + ItemXMLInfo.getName(_loc3_) + "已经放入你的储存箱！");
         }
      }
      
      private static function onExchange(param1:SocketEvent) : void
      {
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchange);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ != 0)
         {
            GetPetController.getPet(_loc3_,_loc4_);
         }
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_)
         {
            _loc7_ = _loc2_.readUnsignedInt();
            _loc8_ = _loc2_.readUnsignedInt();
            ItemInBagAlert.show(_loc7_,_loc8_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc7_)) + "已经放入你的储存箱！");
            _loc6_++;
         }
      }
      
      private static function envolution(param1:uint) : void
      {
         var _loc2_:PetInfo = null;
      }
      
      private static function onEnvolution(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ICE_DRAGON_ENVOLUTION,onEnvolution);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = uint(_loc2_.readInt());
         if(_loc3_ == 1063)
         {
            TasksManager.setTaskStatus(866,TasksManager.COMPLETE);
            DebugTrace.show("冰龙已经进化到了第二形态---" + TasksManager.getTaskStatus(866));
            Alarm.show("恭喜你！你的天幕冰龙已经进化至第二形态！");
         }
      }
   }
}
