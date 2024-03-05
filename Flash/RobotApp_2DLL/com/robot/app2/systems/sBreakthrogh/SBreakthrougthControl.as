package com.robot.app2.systems.sBreakthrogh
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemTipXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class SBreakthrougthControl
   {
      
      private static var _bagMap:HashMap = new HashMap();
      
      private static var _tipMap:HashMap = new HashMap();
      
      private static var _tipMc:MovieClip;
      
      private static var _allEggsNum:int;
       
      
      public function SBreakthrougthControl()
      {
         super();
      }
      
      public static function update(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendWithCallback(CommandID.S_BREAKTHROUGH_GET_EGGS,function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc8_:int = 0;
            var _loc9_:UniversalEgg = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:HashMap = _bagMap;
            _bagMap = new HashMap();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = int(_loc2_.readUnsignedInt());
               _loc7_ = int(_loc2_.readUnsignedInt());
               _loc8_ = int(_loc2_.readUnsignedInt());
               (_loc9_ = !!_loc4_.getValue(_loc6_) ? _loc4_.getValue(_loc6_) : new UniversalEgg()).getTime = _loc6_;
               _loc9_.itemId = _loc7_;
               _loc9_.energy = _loc8_;
               _bagMap.add(_loc9_.getTime,_loc9_);
               _loc5_++;
            }
            fun();
         },0,200,1);
      }
      
      public static function getEgg(param1:int) : UniversalEgg
      {
         return _bagMap.getValue(param1);
      }
      
      public static function getAll() : Array
      {
         var _loc1_:Array = _bagMap.getValues();
         _loc1_.sortOn(["level","type"]);
         return _loc1_;
      }
      
      public static function getUniversalEgg(param1:int, param2:int) : Array
      {
         var result:Array = null;
         var type:int = param1;
         var level:int = param2;
         result = [];
         _bagMap.eachValue(function(param1:UniversalEgg):void
         {
            if(param1.eggBreakthroughInfo.type == type && param1.eggBreakthroughInfo.level == level)
            {
               result.push(param1);
            }
         });
         return result;
      }
      
      public static function addEggTip(param1:DisplayObject, param2:UniversalEgg) : void
      {
         _tipMap.add(param1,param2);
         param1.addEventListener(MouseEvent.ROLL_OVER,onRollOver);
         param1.addEventListener(MouseEvent.ROLL_OUT,onRollOut);
      }
      
      public static function removeEggTip(param1:DisplayObject) : void
      {
         param1.removeEventListener(MouseEvent.ROLL_OVER,onRollOver);
         param1.removeEventListener(MouseEvent.ROLL_OUT,onRollOut);
         _tipMap.remove(param1);
      }
      
      public static function onRollOver(param1:MouseEvent) : void
      {
         var _loc2_:UniversalEgg = _tipMap.getValue(param1.currentTarget);
         if(null == _tipMc)
         {
            _tipMc = UIManager.getMovieClip("universalEggTip");
         }
         _tipMc["nameTxt"].text = ItemXMLInfo.getName(_loc2_.itemId);
         var _loc3_:int = _loc2_.energy / _loc2_.eggBreakthroughInfo.needEnergy * 100;
         _tipMc["levelMc"].gotoAndStop(_loc3_);
         _tipMc["infor"].text = ItemTipXMLInfo.getItemDes(_loc2_.itemId);
         showTip();
      }
      
      public static function onRollOut(param1:MouseEvent) : void
      {
         hideTip();
      }
      
      private static function hideTip() : void
      {
         if(Boolean(_tipMc) && Boolean(_tipMc.parent))
         {
            LevelManager.tipLevel.removeChild(_tipMc);
            _tipMc.removeEventListener(Event.ENTER_FRAME,enterFrameHandler);
         }
      }
      
      private static function showTip() : void
      {
         LevelManager.tipLevel.addChild(_tipMc);
         _tipMc.addEventListener(Event.ENTER_FRAME,enterFrameHandler);
         enterFrameHandler(null);
      }
      
      private static function enterFrameHandler(param1:Event) : void
      {
         if(MainManager.getStage().mouseX + _tipMc.width + 20 >= MainManager.getStageWidth())
         {
            _tipMc.x = MainManager.getStage().mouseX - _tipMc.width - 10;
         }
         else
         {
            _tipMc.x = MainManager.getStage().mouseX + 10;
         }
         if(MainManager.getStage().mouseY + _tipMc.height + 20 >= MainManager.getStageHeight())
         {
            _tipMc.y = MainManager.getStageHeight() - _tipMc.height - 10;
         }
         else
         {
            _tipMc.y = MainManager.getStage().mouseY + 20;
         }
         _tipMc.visible = true;
      }
      
      public static function achievePet() : void
      {
         PetManager.upDate(function():void
         {
            var petInfo:PetListInfo = null;
            var pid:int = 0;
            var args:Array = [0,0];
            var petInfors:Array = PetManager.getBagMap();
            var i:int = 0;
            while(i < petInfors.length)
            {
               petInfo = petInfors[i];
               pid = int(petInfo.id);
               if(PetXMLInfo.getEvolvesTo(pid) > 0)
               {
                  pid = int(PetXMLInfo.getEvolvesTo(pid));
               }
               if(pid == 2333)
               {
                  args[0] = petInfo.catchTime;
               }
               if(pid == 2376)
               {
                  args[1] = petInfo.catchTime;
               }
               i++;
            }
            if(Boolean(args[0]) && Boolean(args[1]))
            {
               SocketConnection.sendWithCallback(CommandID.S_BREAKTHROUGH_GET_ANZHILING_OP,function():void
               {
                  Alarm.show("激活成功！");
               },6,args[0],args[1]);
            }
            else
            {
               Alarm.show(PetXMLInfo.getName(2333) + " 和 " + PetXMLInfo.getName(2376) + "必须同时在背包中！");
            }
         });
      }
   }
}
