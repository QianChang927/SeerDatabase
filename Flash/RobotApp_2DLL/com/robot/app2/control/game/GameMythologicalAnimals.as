package com.robot.app2.control.game
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class GameMythologicalAnimals
   {
       
      
      public function GameMythologicalAnimals()
      {
         super();
      }
      
      public static function playTrancyPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86067753);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("mythologicalAnimals"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            SocketConnection.send(1022,86067754);
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.SEER,["哇，神兽大集合啊，你们集合起来，是不是有什么大事要发生？"],["我们的老朋友要回来了。"]],[NPC.SEER,["老朋友？不会又是什么破坏分子吧。。。"],["不，是我们最值得尊敬的对手。"]],[NPC.FEINIKESI,["他们是神兽战团，银河系中的一伙极度热爱战斗的家伙。"],["有这么厉害"]],[NPC.QINGLONG,["可不要小看他们，他们各自都拥有着极强的能力，当他们几个聚集在一起时，所激发的战力堪比我们神兽。-天魔星上！ "],["我的天哪"]],[NPC.SEER,["那当时他们为什么会离开呢-迪莫西斯，恐惧之神-阿瑞波斯，风暴之神-阿洛纳斯也同时出现在了天魔星 "],["为了寻找更多，更强的对手。"]],[NPC.ARUISI,["不断的让自己变强，超越银河系所有精灵是他们永恒不变的目标。"],["这样的精神可真让人敬佩啊！"]]];
            d2 = [[NPC.SEER,["刚才的对决真是太精彩了！"],["这些都是小意思，要是那三个家伙一起出现，这里说不定都会被他们给拆了。。。"]],[NPC.TAIGEER,["赤焰战魂和紫金斗魂呢？这两个家伙去哪里了？"],["他们还在泰坦星系呢"]],[NPC.TELANXI,["在通往泰坦星系的通道被打开后，我第一时间就赶来找你们了。那两个家伙还在那里拼命修炼呢。"],["原来是这样"]],[NPC.TELANXI,["我们在泰坦星系中发现了一个神秘的星云，在那里修炼可以快速提升能力，同时也会遇到许多强力的精灵，我们在那儿真是打的不亦乐乎啊！"],["你们的本性还是没变啊！"]],[NPC.TELANXI,[MainManager.actorInfo.nick + "，听说你是精灵训练大师，想不想去我们修炼的地方看看？"],["太好了！"]],[NPC.SEER,["能一睹神兽战团的修炼之地，实在是太棒了！"],["那我们这就出发"]]];
            d3 = [[NPC.SEER,["原来这里就是你们神兽战团训练的地方！"],["是的！"]],[NPC.TELANXI,["这个冬天，我们会一直在这里进行特训，如果你想挑战我们，可以随时来这里。"],["神兽战团，我一定会击败你们！"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addChangeMap(666,function():void
            {
               var i:int;
               var tid:int = 0;
               MapManager.currentMap.controlLevel.addChild(mapMv);
               i = 0;
               while(i < 4)
               {
                  MapManager.currentMap.controlLevel["stone_" + i].visible = false;
                  i++;
               }
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addChangeMap(975,function():void
            {
               var tid:int = 0;
               hideOrShowNpcs(false);
               MapManager.currentMap.controlLevel.addChild(mapMv);
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.procesEndFun = function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               BufferRecordManager.setMyState(1001,true);
               DisplayUtil.removeForParent(mapMv);
               hideOrShowNpcs(true);
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      private static function get npcs() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(MapManager.currentMap.controlLevel["npcs"]);
         return _loc1_;
      }
      
      private static function hideOrShowNpcs(param1:Boolean) : void
      {
         var _loc3_:DisplayObject = null;
         var _loc2_:int = 0;
         while(_loc2_ < npcs.length)
         {
            _loc3_ = npcs[_loc2_];
            if(_loc3_)
            {
               _loc3_.visible = param1;
            }
            _loc2_++;
         }
      }
   }
}
