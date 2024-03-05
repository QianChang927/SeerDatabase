package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setInterval;
   import org.taomee.manager.ResourceManager;
   
   public class NewYearRedPackage2016Controller
   {
      
      private static var _isAutoOpen:Array = [false,false,false];
      
      private static var isOpen:Boolean;
      
      private static var _random:int;
      
      private static var _npc:MovieClip;
       
      
      public function NewYearRedPackage2016Controller()
      {
         super();
      }
      
      public static function setup() : void
      {
         setInterval(function():void
         {
            var _loc1_:Date = SystemTimerManager.sysBJDate;
            if(_loc1_.hours == 9 && _loc1_.minutes > 58 && !_isAutoOpen[0])
            {
               _isAutoOpen[0] = true;
               showPanel();
            }
            else if(_loc1_.hours == 11 && _loc1_.minutes > 58 && !_isAutoOpen[1])
            {
               _isAutoOpen[1] = true;
               showPanel();
            }
            else if(_loc1_.hours == 13 && _loc1_.minutes > 58 && !_isAutoOpen[2])
            {
               _isAutoOpen[2] = true;
               showPanel();
            }
         },5000);
         randomMap();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,destroyNpc);
      }
      
      private static function destroyNpc(param1:* = null) : void
      {
         if(Boolean(_npc) && Boolean(_npc.parent))
         {
            _npc.parent.removeChild(_npc);
         }
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showAppModule("NewYearRedPackageRush2016Panel");
      }
      
      public static function onSwitchMap(param1:* = null) : void
      {
         var e:* = param1;
         if(MapManager.currentMap.id == _random)
         {
            if(!_npc)
            {
               ResourceManager.getResource(ClientConfig.getNpcSwfPath("rednpc"),function(param1:DisplayObject):void
               {
                  _npc = param1 as MovieClip;
                  _npc["btn"].addEventListener(MouseEvent.CLICK,onClickNpc);
                  addNpc();
               });
            }
            else
            {
               addNpc();
            }
         }
      }
      
      private static function addNpc() : void
      {
         MapManager.currentMap.depthLevel.addChild(_npc);
         var _loc1_:Array = [1151,1153,1152,1155];
         var _loc2_:Array = [[213,321],[430,292],[540,350],[213,321]];
         var _loc3_:int = _loc1_.indexOf(MapManager.currentMap.id);
         _npc.x = _loc2_[_loc3_][0];
         _npc.y = _loc2_[_loc3_][1];
      }
      
      private static function onClickNpc(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         KTool.getMultiValue([12400,12401,12402,12398],function(param1:Array):void
         {
            var str:String = null;
            var arr:Array = null;
            var a:int = 0;
            var b:int = 0;
            var f:Array = param1;
            var num:int = f[0] + f[1] + f[2];
            var time:Number = 300 - (SystemTimerManager.sysBJDate.time / 1000 - f[3]);
            if(num >= 50)
            {
               NpcDialog.show(NPC.RED_NPC,["真是勤奋的小赛尔！不过今天红包已经没有啦，明天再来吧~"]);
            }
            else if(time > 0)
            {
               str = String(SystemTimerManager.getTimeClockString(time,false));
               arr = str.split(":");
               a = int(arr[0]);
               b = int(arr[1]);
               if(a > 0)
               {
                  str = a + "分" + b + "秒";
               }
               else
               {
                  str = b + "秒";
               }
               NpcDialog.show(NPC.RED_NPC,["红包暂时被抢光啦~" + str + "后来吧！~"]);
            }
            else
            {
               NpcDialog.show(NPC.RED_NPC,["元旦快乐哦~这是给你的红包，赶快去把它送给你的小伙伴吧！~"],null,null,false,function():void
               {
                  KTool.socketSendCallBack(47266,function(param1:*):void
                  {
                     randomMap();
                     destroyNpc();
                     ModuleManager.showAppModule("NewYearRedPackageChange2016Panel");
                  },[1,1]);
               });
            }
         });
      }
      
      private static function randomMap() : void
      {
         var _loc1_:int = int(MapManager.currentMap.id);
         var _loc2_:Array = [1151,1153,1152,1155];
         var _loc3_:int = _loc2_.indexOf(_loc1_);
         if(_loc3_ != -1)
         {
            _loc2_.splice(_loc3_,1);
         }
         var _loc4_:int = _loc2_.length * Math.random();
         _random = _loc2_[_loc4_];
      }
   }
}
