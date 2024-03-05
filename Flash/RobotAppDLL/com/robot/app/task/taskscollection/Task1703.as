package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.EventListenerUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1703
   {
      
      private static const TASK_ID:int = 1703;
      
      private static var _map:BaseMapProcess;
      
      private static var _eventUtil:EventListenerUtil = null;
       
      
      public function Task1703()
      {
         super();
      }
      
      public static function initForMap785(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _eventUtil = new EventListenerUtil();
         ToolTipManager.add(_map.conLevel["btnWater"],"鲁斯王特训 8月9日-8月22日  已结束");
         ToolTipManager.add(_map.conLevel["btnFire"],"魔焰猩猩特训 8月16日-8月29日  已结束");
         SocketConnection.sendWithCallback(CommandID.GET_FOREVER_VALUE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(_loc3_ == 0)
            {
               initTaskIcon();
            }
            else
            {
               initThreeGodIcon();
            }
         },718);
      }
      
      private static function initTaskIcon() : void
      {
         _map.btnLevel["mcThreeGod"].visible = false;
         _eventUtil.addEventListener(taskMC,MouseEvent.CLICK,onClickTaskMC);
      }
      
      private static function initThreeGodIcon() : void
      {
         BufferRecordManager.setMyState(767,true);
         DisplayUtil.removeForParent(taskMC);
         _map.btnLevel["mcThreeGod"].visible = true;
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnFire"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnWater"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnGrass"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.conLevel["btnGrass"]),MouseEvent.CLICK,onClickChange2Map945);
         ToolTipManager.add(_map.btnLevel["mcThreeGod"],"融合三神宠特训");
         ToolTipManager.add(_map.conLevel["btnGrass"]," 丽莎布布特训 点击进入");
      }
      
      private static function onClickTaskMC(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86061447);
         _eventUtil.removeTargetAllEventListener(taskMC);
         playPreStory();
      }
      
      private static function onClickThreeGodPanel(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86061449);
         ModuleManager.showModule(ClientConfig.getAppModule("ThreeGodPetTrainMainPanel"));
      }
      
      private static function onClickChange2Map941(param1:MouseEvent) : void
      {
         MapManager.changeMap(941);
      }
      
      private static function onClickChange2Map944(param1:MouseEvent) : void
      {
         MapManager.changeMap(944);
      }
      
      private static function onClickChange2Map945(param1:MouseEvent) : void
      {
         MapManager.changeMap(945);
      }
      
      private static function playPreStory() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.send(47017);
            initThreeGodIcon();
            SocketConnection.send(1022,86061448);
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["鲁斯王都已经完成特训了，我的特训怎么还没开始……是不是师傅觉得我没资格接受特训…"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["小家伙们，好久不见了~ "],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["过分？嗯…仔细想想，我是挺过分的…过了这么久，才想起来要收拾这几个老骨头。 ~ "],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["今天，就让我结果你们！免得被观众怀疑我打不过你们！ ~ "],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["你是谁？不要伤害我师傅！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["师傅！你…你复原了？太好了！这个黑影，是谁？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["它，是我、炎魔、鱼龙王最尊重的精灵——"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20130823_3",true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["恶灵兽…就这样不见了？你…你究竟是何方神圣？师傅，它，它真的是你的师傅吗？"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["哈哈，它只是暂时被我赶走了，彻底消灭它的使命还需要你们来完成。小家伙，现在，赶快开始你的特训吧。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LINGSHOUZHIZUN,["既然你们都安然无恙，我就可以放心回去修炼了。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["暗黑战神联盟的势力正在不断扩张，战争一触即发。我们不能再耽误时间了。丽莎布布，我在特训秘境等着你。"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["嗯！师傅，我们都不会让你们失望的！不管是恶灵兽，还是暗黑战神联盟，它们的阴谋都不可能得逞的！"],null));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 7,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSIWANG,["快去吧丽莎布布，魔焰猩猩你也是，要抓紧最后一周的宝贵时间啊。Xxxx，希望你能一如既往帮助我们完成特训。"],["嗯！没问题~"]));
         return _loc1_;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.btnLevel["mcTask1703"];
      }
      
      public static function destroy() : void
      {
         if(_eventUtil)
         {
            _eventUtil.dispose();
         }
         _eventUtil = null;
         _map = null;
      }
   }
}
