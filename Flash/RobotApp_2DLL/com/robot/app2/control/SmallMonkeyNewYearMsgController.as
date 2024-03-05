package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   
   public class SmallMonkeyNewYearMsgController
   {
      
      private static var _data:int;
      
      private static var nids:Array = [1,103,289,287,0,285,6,129,3];
      
      private static var _currNPC:MovieClip;
       
      
      public function SmallMonkeyNewYearMsgController()
      {
         super();
      }
      
      public static function setup() : void
      {
         update();
         NpcController.addEventListener(NpcController.NPC_INIT,onNPCInit);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id > 50000 && MapManager.mapType == MapType.HOOM)
         {
            MainManager.actorModel.hideTopIcon();
         }
         else
         {
            MainManager.actorModel.updateTopIcon();
         }
      }
      
      private static function onNPCInit(param1:*) : void
      {
         var _loc2_:int = 0;
         var _loc3_:DisplayObjectContainer = null;
         var _loc4_:int = 0;
         if(BitBuffSetClass.getState(23066))
         {
            _loc2_ = 0;
            while(_loc2_ < nids.length)
            {
               if(nids[_loc2_] > 0)
               {
                  _loc3_ = NpcController.getNpc(nids[_loc2_]) as DisplayObjectContainer;
                  if(_loc3_)
                  {
                     _loc4_ = int(BitUtils.getBit(_data,_loc2_));
                     CommonUI.removeYellowExcal(_loc3_);
                     if(_loc4_ == 0)
                     {
                        if(_loc2_ != 7 && _loc3_.height > 10)
                        {
                           CommonUI.addYellowExcal(_loc3_,0,-_loc3_.height);
                        }
                        else
                        {
                           CommonUI.addYellowExcal(_loc3_,0,-90);
                        }
                     }
                  }
               }
               _loc2_++;
            }
         }
      }
      
      public static function AddSeerNPCExcal(param1:int, param2:MovieClip) : void
      {
         var _loc6_:int = 0;
         var _loc3_:Array = [289,287,285];
         var _loc4_:Array = [1155,7,1151];
         var _loc5_:int;
         if((_loc5_ = _loc3_.indexOf(param1)) >= 0)
         {
            if(MapManager.currentMap.id == _loc4_[_loc5_])
            {
               _currNPC = param2;
               _currNPC.mid = MapManager.currentMap.id;
               _loc6_ = nids.indexOf(param1);
               _currNPC.i = _loc6_;
               updateSeerNPCExcal();
            }
         }
      }
      
      private static function updateSeerNPCExcal() : void
      {
         var _loc1_:int = 0;
         if(_currNPC)
         {
            if(MapManager.currentMap.id == _currNPC.mid)
            {
               if(BitBuffSetClass.getState(23066))
               {
                  _loc1_ = int(BitUtils.getBit(_data,_currNPC.i));
                  CommonUI.removeYellowExcal(_currNPC.parent);
                  if(_loc1_ == 0)
                  {
                     CommonUI.addYellowExcal(_currNPC.parent,_currNPC.x,_currNPC.y - 108);
                  }
               }
            }
         }
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([8457],function(param1:Array):void
         {
            _data = param1[0];
            onNPCInit(null);
            updateSeerNPCExcal();
         });
      }
      
      public static function checkSmallMonkeyNPC(param1:int) : Boolean
      {
         var npcids:Array = null;
         var index:int = 0;
         var flag:int = 0;
         var msg:Array = null;
         var id:int = param1;
         if(!BitBuffSetClass.getState(23066))
         {
            return false;
         }
         npcids = [1,800,289,287,0,285,6,2496,3];
         index = nids.indexOf(id);
         if(index >= 0)
         {
            flag = int(BitUtils.getBit(_data,index));
            if(flag == 0)
            {
               msg = getMsg(index);
               NpcDialog.show(npcids[index],[msg[0]],[msg[1]],[function():void
               {
                  NpcDialog.show(npcids[index],[msg[2]],[msg[3],"拜访其他船员"],[function():void
                  {
                     sendVisit(index);
                  },function():void
                  {
                     sendVisit(index);
                     ModuleManager.showAppModule("SmallMonkeyNewYearMessagePanel");
                  }]);
               }]);
               return true;
            }
         }
         return false;
      }
      
      private static function sendVisit(param1:int) : void
      {
         var index:int = param1;
         SocketConnection.sendWithCallback(41718,function(param1:SocketEvent):void
         {
            Alarm2.show("拜年完成，恭喜你的孙小圣获得了等级提升！");
            update();
         },10 + index);
      }
      
      public static function visitSaixiaoxi() : void
      {
         if(!checkSmallMonkeyNPC(289))
         {
            NpcDialog.show(NPC.SAIXIAOXI,["好久不见！孙小圣听说这次新年福利非常多，你都领了吗？"],["新年快乐~"],[function():void
            {
            }]);
         }
      }
      
      public static function visitKalulu() : void
      {
         if(!checkSmallMonkeyNPC(287))
         {
            NpcDialog.show(NPC.KALULU,["孙小圣！我好想念你啊，你终于回来了！"],["新年快乐~"],[function():void
            {
            }]);
         }
      }
      
      public static function visitAtieda() : void
      {
         if(!checkSmallMonkeyNPC(285))
         {
            NpcDialog.show(NPC.ATIEDA,["孙小圣我们来比试一下吧！我知道你很强，但是我现在已经修炼得相当厉害了！不信你试试我的双刀？"],["额~新年快乐~"],[function():void
            {
            }]);
         }
      }
      
      public static function visitBase() : void
      {
         var flag:int = int(BitUtils.getBit(_data,4));
         if(flag == 0)
         {
            SocketConnection.sendWithCallback(41718,function(param1:SocketEvent):void
            {
               update();
            },14);
         }
      }
      
      private static function getMsg(param1:int) : Array
      {
         var _loc2_:Array = [["这不是孙小圣吗？看到你真高兴！赛尔号永远是你的家！","新年快乐~","我听说绝版神宠回归了哦！是个超强福利啊！","哇，好厉害"],["孙小圣你是合格的战士！我十分欣赏你！","新年快乐~","新年期间会送出赛尔最强套装哦！你去领了吗？","真的吗！"],["好久不见！孙小圣听说这次新年福利非常多，你都领了吗？","新年快乐~","四魔神只有这周可以得哦！还不快去！","好的，拜拜？新年快乐！"],["孙小圣！我好想念你啊，你终于回来了！","新年快乐~","听说米宝会神奇魔法？可以把你的钻石变得更多！","这么厉害，我这就去找她！"],["孙小圣！我好想念你啊，你终于回来了！","新年快乐~"],["孙小圣我们来比试一下吧！我知道你很强，但是我现在已经修炼得相当厉害了！不信你试试我的双刀？","额~新年快乐~~","我听说大圣齐天帝天战佛也来了！","我要去挑战他！拜拜!"],["我最近发明了一种激发精灵潜能的药剂！孙小圣你来的正好，快来帮我试试药！","这颜色为什么这么可怕？快跑~","哈莫雷特加冕为王了！我要去围观大典！","我也要去！"],["孙小圣你游历归来应该更强了！应该获得更高的功勋","新年快乐~","有个叫红包侠的很嚣张。我忍不住要出手了！","我要先下手为强！"],["孙小圣你来啦！你身上有着奇特的能量！快来给我研究研究！","快跑~新年快乐~","听说华年•雷小伊和华年•缪小斯在比试年夜饭，你要去看看嘛？","缪小斯！！！我这就去！"]];
         return _loc2_[param1];
      }
   }
}
