package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class XieHuaYiZuController
   {
      
      public static var _instance:com.robot.app2.control.XieHuaYiZuController;
       
      
      protected var BUFFER:uint = 1123;
      
      private var _taskMC:MovieClip;
      
      public function XieHuaYiZuController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.XieHuaYiZuController
      {
         return _instance = _instance || new com.robot.app2.control.XieHuaYiZuController();
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         var mod1:TaskMod = null;
         var mod2:TaskMod = null;
         var mod3:TaskMod = null;
         var mod4:TaskMod = null;
         var mod5:TaskMod = null;
         var mod6:TaskMod = null;
         var mod7:TaskMod = null;
         var mod8:TaskMod = null;
         var mod9:TaskMod = null;
         var mod10:TaskMod = null;
         var mod11:TaskMod = null;
         var mod12:TaskMod = null;
         var mod13:TaskMod = null;
         var mod14:TaskMod = null;
         var mod15:TaskMod = null;
         var mod16:TaskMod = null;
         var mod17:TaskMod = null;
         var mod18:TaskMod = null;
         var mod19:TaskMod = null;
         var mod20:TaskMod = null;
         var mod21:TaskMod = null;
         var mod22:TaskMod = null;
         var mod23:TaskMod = null;
         var mc:MovieClip = param1;
         this._taskMC = mc;
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            SocketConnection.send(1022,86073337);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MASIKA_XIE,["魔灵王再怎么说我们也是属于天魔组织的成员，你怎么可以如此对待我们？"],["哼…天魔阻止只需要强者！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO_XIE,["看来今天我们是背水一战了，魔灵王今天你来的目的想必是想铲除我们吧？！"],["小子…还是你比较聪明！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO_XIE,["魔灵王，你别忘记我们邪化一族也并非浪得虚名，就算我们实力没有你强，但是只要我们团结就一定可以抵抗你？！"],["哈哈哈…那就来试试吧！"]);
            mod5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO_XIE,["为什么我们会有这样的下场，当时巨尾妖狐不是答应我们可以获得强大能量，超越自我的吗？"],["还是先挺过现在再说吧！"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO_XIE,["伙伴们，我们一起努力，否则我们都回葬身于此！"],["巨尾妖狐，你在哪里啊！"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["哼哼…你们是在搬救兵吗？就算你们和巨尾妖狐联手，也不是我魔灵王的对手，你们还是放弃吧！"],["天魔组织不需要邪化一族！"]);
            mod9 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["终于出现了…邪化巨尾妖狐！省的麻烦，让我一并将你们全部解决掉吧！"],["邪化一族的生命不该有你掌控！"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUWEIYAOHU_XIE,["伙伴们，是我连累了你们，原本想给到你们强大的能量，但是结果让你们失望了，让我们并肩战斗，一起抵御天魔组织吧！"],["好，让我们邪化一族一起战斗！"]);
            mod12 = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/cartoon_20140424_xiehua"]);
            mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUWEIYAOHU_XIE,["可恶，看来天魔组织可不是一般的强，仅靠我们几个实力，一定不是魔灵王的对手！"],["我们是不会轻易放弃的！"]);
            mod14 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
            mod15 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHOUSI_SUPER,["魔灵王…回去告诉天魔组织，总有一天我一定铲除你们的！"],["众神之王，不如现在就让我解决你！"]);
            mod16 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
            mod17 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["邪化一族，算你们走运，接下来就是你们的逃亡生涯了，无论你们走到哪里，我都会找你们的！"],["就这样卑微的活着吧！！"]);
            mod18 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
            mod19 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHOUSI_SUPER,["邪化巨尾妖狐，由于你的一念之差，差点牺牲了这些精灵伙伴，你是该反省一下了！"],["放心吧！众神之王，我知道该怎么做！"]);
            mod20 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,7,"mc7"]);
            mod21 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHOUSI_SUPER,["邪化一族，原本你们不该存在，但是既然现在事已至此，是继续保持原样还是脱离天魔组织，就看你们自己的决定了！"],["众神之王，交给我吧！"]);
            mod22 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZHOUSI_SUPER,["很好…" + MainManager.actorInfo.formatNick + "邪化一族就交给你了，相信通过你的帮助一定可以治愈他们！"],["恩恩，放心吧！"]);
            mod23 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,8,"mc8"]);
            KTool.hideMapAllPlayerAndMonster();
            (MapManager.currentMap.controlLevel["xieHuabtn"] as MovieClip).visible = false;
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18,mod19,mod20,mod21,mod22,mod23],function():void
            {
               SocketConnection.send(1022,86073338);
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(BUFFER,true);
               (MapManager.currentMap.controlLevel["xieHuabtn"] as MovieClip).visible = true;
               addEvents();
            });
         }
         else
         {
            this._taskMC.gotoAndStop(8);
            this._taskMC["mc8"].gotoAndStop(this._taskMC["mc8"].totalFrames);
            (MapManager.currentMap.controlLevel["xieHuabtn"] as MovieClip).visible = true;
            this.addEvents();
         }
      }
      
      public function start() : void
      {
         SocketConnection.send(1022,86073336);
         StoryLoaderManager.insatnce.swfName = "map_978_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
         (MapManager.currentMap.controlLevel["xieHuabtn"] as MovieClip).buttonMode = true;
      }
      
      private function addEvents() : void
      {
         (MapManager.currentMap.controlLevel["xieHuabtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onClickHandler,false,0,true);
         this._taskMC["mc8"]["npc1"].addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         this._taskMC["mc8"]["npc2"].addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         this._taskMC["mc8"]["npc3"].addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         this._taskMC["mc8"]["boosMc"].addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
      }
      
      private function onMouseClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         switch(_loc2_)
         {
            case "npc1":
            case "npc2":
            case "npc3":
               ModuleManager.showModule(ClientConfig.getAppModule("XieHuaJuWeiYaoHuPanel"),"正在努力打开面板...");
               break;
            case "boosMc":
               ModuleManager.showModule(ClientConfig.getAppModule("XieHuaJuWeiYaoHuMainPanel"),"正在努力打开面板...");
         }
      }
      
      private function onClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("XieHuaJuWeiYaoHuPanel"),"正在努力打开面板...");
      }
      
      public function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
   }
}
