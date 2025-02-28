package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   
   public class PrinceDragonOrderController
   {
      
      private static var _map:MapModel;
      
      private static var _itemMc:Array;
      
      private static var _timeI:uint;
      
      private static var _maps:Array = [11043,11044,1157,11045];
       
      
      public function PrinceDragonOrderController()
      {
         super();
      }
      
      public static function init() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onInMap);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,destroy);
      }
      
      private static function onInMap(param1:* = null) : void
      {
         var i:int = 0;
         var movie:MovieClip = null;
         var items:Array = null;
         var e:* = param1;
         _map = MapManager.currentMap;
         if(MapManager.currentMap.id == _maps[0])
         {
            _itemMc = [];
            _itemMc.push(_map.controlLevel["item1_0"]);
            _itemMc.push(_map.controlLevel["item2_0"]);
            _itemMc.push(_map.controlLevel["item3_1"]);
            i = 0;
            while(i < _itemMc.length)
            {
               _itemMc[i].addEventListener(MouseEvent.CLICK,onClickItem);
               _itemMc[i].buttonMode = true;
               i++;
            }
            _map.controlLevel["btn_npc"].addEventListener(MouseEvent.CLICK,onClickTxy);
            updateItemWithMap();
            _timeI = setInterval(updateItemWithMap,5000);
         }
         else if(MapManager.currentMap.id == _maps[1])
         {
            movie = _map.animatorLevel["anim"];
            movie.visible = false;
            _map.depthLevel["p_main"].stop();
            if(!BitBuffSetClass.getState(23028))
            {
               _map.depthLevel.visible = false;
               _map.btnLevel.visible = false;
               movie.addFrameScript(movie.totalFrames - 1,function():void
               {
                  _map.animatorLevel.removeChild(movie);
                  movie.visible = false;
                  BitBuffSetClass.setState(23028,1);
                  _map.depthLevel.visible = true;
                  _map.btnLevel.visible = true;
               });
               movie.visible = true;
               movie.gotoAndPlay(2);
            }
            else
            {
               _map.animatorLevel.removeChild(movie);
            }
            updateNpcState11044();
            _map.btnLevel.addEventListener(MouseEvent.CLICK,onClickMap11044Btn);
         }
         else if(MapManager.currentMap.id == _maps[2])
         {
            _map.controlLevel["btn_swr"].addEventListener(MouseEvent.CLICK,onClickSwr);
         }
         else if(MapManager.currentMap.id == _maps[3])
         {
            items = [1707861,1707864,1707867];
            getItemNum(items,function(param1:Array):void
            {
               var arr:Array = param1;
               KTool.getMultiValue([8131],function(param1:Array):void
               {
                  var _loc5_:* = false;
                  var _loc6_:* = false;
                  var _loc2_:Array = ["npc_2743","npc_2721","npc_2750"];
                  var _loc3_:Array = ["btn_2743","btn_2721","btn_2750"];
                  var _loc4_:int = 0;
                  while(_loc4_ < 3)
                  {
                     _loc5_ = ItemManager.getNumByID(items[_loc4_]) > 0;
                     _loc6_ = KTool.getBit(param1[0],_loc4_ + 1) > 0;
                     _map.controlLevel[_loc2_[_loc4_]].visible = !_loc5_ && !_loc6_;
                     _map.btnLevel[_loc3_[_loc4_]].visible = !_loc5_ && !_loc6_;
                     _loc4_++;
                  }
                  _map.btnLevel.addEventListener(MouseEvent.CLICK,onClickMap11045Btn);
               });
            });
         }
      }
      
      private static function updateNpcState11044(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([8134],function(param1:Array):void
         {
            var _loc3_:* = false;
            var _loc2_:int = 1;
            while(_loc2_ <= 10)
            {
               _loc3_ = KTool.getBit(param1[0],_loc2_) > 0;
               _map.btnLevel["n_" + _loc2_].visible = !_loc3_;
               _map.depthLevel["p_" + _loc2_].visible = !_loc3_;
               _loc2_++;
            }
         });
      }
      
      private static function onClickMap11044Btn(param1:MouseEvent) : void
      {
         var items:Array = null;
         var need:Array = null;
         var names:Array = null;
         var index:int = 0;
         var e:MouseEvent = param1;
         if(e.target.name == "btn_tkl")
         {
            items = [1707862,1707863,1707864];
            need = [5,5,1];
            getItemNum(items,function(param1:Array):void
            {
               NpcDialog.show(NPC.HUN_TAKELIN,["你已经收集了" + param1[0] + "/5个军令状与" + param1[1] + "/5个说明书以及" + param1[2] + "/1惊鸿邪翼！加油吧！"],["好的！","我想去别的任务场景！","我想看看别的还缺少什么！"],[null,openGetResPanel,openMainPanel]);
            });
         }
         else
         {
            names = String(e.target.name).split("_");
            if(names[0] == "n")
            {
               index = int(names[1]);
               if(index > 5)
               {
                  NpcDialog.show(NPC.WULUKA,["你问我愿不愿意一起去？你算什么东西？我只跟随强者！"],["好，我就让你见识一下！","我再问问别的乌鲁卡。"],[function():void
                  {
                     fight(6341 + index - 6);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.WULUKA,["……我只想过安静的生活，我对战争没有兴趣，你不必再勉强我了。"],["谢谢，我知道了。"],[function():void
                  {
                     KTool.socketSendCallBack(41705,updateNpcState11044,[index + 2]);
                  }]);
               }
            }
         }
      }
      
      private static function onClickMap11045Btn(param1:MouseEvent) : void
      {
         var items:Array = null;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "btn_2743":
               NpcDialog.show(NPC.MO_LEITINGLONG,["听说你要来取我的头颅？哈哈哈哈！笑话！"],["来战！","等会再收拾你。"],[function():void
               {
                  fight(6302);
               }]);
               StatManager.sendStat2014("0108龙王子的号令","点击挑战魔化雷霆龙","2016运营活动");
               break;
            case "btn_2721":
               NpcDialog.show(NPC.MO_JINGHONGLONG,["听说你要来取我的翅膀？哈哈哈哈！笑话！"],["来战！","等会再收拾你。"],[function():void
               {
                  fight(6303);
               }]);
               StatManager.sendStat2014("0108龙王子的号令","点击挑战魔化惊鸿龙","2016运营活动");
               break;
            case "btn_2750":
               NpcDialog.show(NPC.MO_XINGLINGLONG,["听说你要来取我的眼睛？哈哈哈哈！笑话！"],["来战！","等会再收拾你。"],[function():void
               {
                  fight(6304);
               }]);
               StatManager.sendStat2014("0108龙王子的号令","点击挑战魔化星灵龙","2016运营活动");
               break;
            case "btn_2546":
               items = [1707861,1707864,1707867];
               getItemNum(items,function(param1:Array):void
               {
                  var _loc2_:int = int(ItemManager.getNumByID(1707861));
                  var _loc3_:int = int(ItemManager.getNumByID(1707864));
                  var _loc4_:int = int(ItemManager.getNumByID(1707867));
                  NpcDialog.show(NPC.LONGSHEN_HAKESASI,["虽然这些龙型精灵非我们龙族！但是他们窥伺我们龙族很久！必须铲除以绝后患！你已经获得了" + _loc2_ + "/1 个雷霆邪颅，" + _loc3_ + "/1个惊鸿邪翼，" + _loc4_ + "/1个星灵邪瞳！"],["好的！","我想去别的任务场景！","我想看看别的还缺少什么！"],[null,openGetResPanel,openMainPanel]);
               });
         }
      }
      
      private static function onClickTxy(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var items:Array = [1707859,1707860,1707861];
         var need:Array = [10,5,1];
         getItemNum(items,function(param1:Array):void
         {
            NpcDialog.show(NPC.HUN_TAXIYA,["你已经收集了" + param1[0] + "/10个极燃木炭与" + param1[1] + "/5个龙鳞陨铁以及" + param1[2] + "/1雷霆邪颅！加油吧！"],["好的！","我想去别的任务场景！","我想看看别的还缺少什么！"],[null,openGetResPanel,openMainPanel]);
         });
      }
      
      private static function onClickSwr(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var items:Array = [1707865,1707866,1707867];
         var need:Array = [5,5,1];
         getItemNum(items,function(param1:Array):void
         {
            NpcDialog.show(NPC.HUN_SAIWEIER,["你已经收集了" + param1[0] + "/5个抗寒药剂与" + param1[1] + "/5个预热药剂以及" + param1[2] + "/1星灵邪瞳！加油吧！"],["好的！","我想去别的任务场景！","我想看看别的还缺少什么！"],[null,openGetResPanel,openMainPanel]);
         });
      }
      
      private static function fight(param1:int) : void
      {
         var _loc2_:int = param1;
         FightManager.fightNoMapBoss("",_loc2_);
      }
      
      private static function updateItemWithMap() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < _itemMc.length)
         {
            _itemMc[_loc1_].x = Math.random() * 485 + 278;
            _itemMc[_loc1_].y = Math.random() * 176 + 250;
            _itemMc[_loc1_].visible = true;
            _loc1_++;
         }
      }
      
      private static function getItemNum(param1:Array, param2:Function) : void
      {
         var items:Array = param1;
         var backfun:Function = param2;
         ItemManager.updateItems(items,function():void
         {
            var _loc1_:Array = [];
            var _loc2_:int = 0;
            while(_loc2_ <= items.length)
            {
               _loc1_.push(ItemManager.getNumByID(items[_loc2_]));
               _loc2_++;
            }
            backfun(_loc1_);
         });
      }
      
      private static function onClickItem(param1:MouseEvent) : void
      {
         var index:int = 0;
         var need:Array = null;
         var e:MouseEvent = param1;
         index = int(String(e.currentTarget.name).split("_")[1]);
         var items:Array = [1707859,1707860,1707861];
         need = [10,5,1];
         e.currentTarget.visible = false;
         getItemNum(items,function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[index] >= need[index])
            {
               Alarm.show("您不能再拥有此资源，先看看别的还缺什么吧？",openMainPanel);
            }
            else
            {
               KTool.socketSendCallBack(41705,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var da:ByteArray = e.data as ByteArray;
                  var re:uint = da.readUnsignedInt();
                  if(re == 0)
                  {
                     NpcDialog.show(NPC.SHENMI_HEIYING,["这些都是我先看上的！给我让开！"],["我偏不！"],[function():void
                     {
                        fight(6300);
                     }]);
                  }
               },[index + 1]);
            }
         });
      }
      
      private static function openMainPanel() : void
      {
         ModuleManager.showAppModule("PrinceDragonOrderResPanel");
         StatManager.sendStat2014("0108龙王子的号令","点击我想看看别的还缺少什么","2016运营活动");
      }
      
      private static function openGetResPanel() : void
      {
         ModuleManager.showAppModule("PrinceDragonOrderResGoPanel");
         StatManager.sendStat2014("0108龙王子的号令","点击我想去别的地方","2016运营活动");
      }
      
      public static function destroy(param1:* = null) : void
      {
         var _loc2_:int = 0;
         if(_maps.indexOf(MapManager.currentMap.id) == -1)
         {
            return;
         }
         clearInterval(_timeI);
         if(_itemMc)
         {
            _loc2_ = 0;
            while(_loc2_ < _itemMc.length)
            {
               _itemMc[_loc2_].removeEventListener(MouseEvent.CLICK,onClickItem);
               _loc2_++;
            }
            _itemMc = null;
         }
         if(Boolean(_map) && Boolean(_map.controlLevel["btn_swr"]))
         {
            _map.controlLevel["btn_swr"].removeEventListener(MouseEvent.CLICK,onClickSwr);
         }
         if(Boolean(_map) && Boolean(_map.controlLevel["btn_npc"]))
         {
            _map.controlLevel["btn_npc"].removeEventListener(MouseEvent.CLICK,onClickTxy);
         }
         if(_map)
         {
            _map.btnLevel.removeEventListener(MouseEvent.CLICK,onClickMap11045Btn);
            _map.btnLevel.removeEventListener(MouseEvent.CLICK,onClickMap11044Btn);
         }
         _map = null;
      }
   }
}
