package com.robot.app.task.petstory.app.train
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TrainTestPanel
   {
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/trainTest.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _info:PetInfo;
      
      private var _titleMC:MovieClip;
      
      public function TrainTestPanel(param1:PetInfo)
      {
         super();
         this._info = param1;
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载训练体检面板");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
         else
         {
            this.showPanel();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("TrainTest_UI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._titleMC = this._mainUI["titleMC"];
         this._titleMC.visible = false;
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.showPanel();
      }
      
      private function showPanel() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         this._mainUI.x += 100;
         this._mainUI.y -= 20;
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._info.id,this._info.catchTime),this.onPetComHandler,"pet");
      }
      
      private function onPetComHandler(param1:DisplayObject) : void
      {
         var loc_1:MovieClip = null;
         var loc_2:MovieClip = null;
         var mc:DisplayObject = param1;
         if(mc)
         {
            loc_1 = mc as MovieClip;
            loc_2 = loc_1.getChildAt(0) as MovieClip;
            DisplayUtil.stopAllMovieClip(loc_1,1);
            loc_1.x = 90;
            loc_1.y = 200;
            loc_1.scaleX = loc_1.scaleY = 3;
            (this._mainUI["testCanvas"] as MovieClip).addChild(loc_1);
            AnimateManager.playMcAnimate(this._mainUI["ctMC"],1,"",function():void
            {
               DisplayUtil.removeForParent(_mainUI["ctMC"]);
               AnimateManager.playMcAnimate(_mainUI["showMC"]["lineMC"],1,"",function():void
               {
                  (_mainUI["showMC"]["lineMC"] as MovieClip).gotoAndStop((_mainUI["showMC"]["lineMC"] as MovieClip).totalFrames);
                  _titleMC.visible = true;
                  showNum();
               });
            });
         }
      }
      
      private function showNum() : void
      {
         (this._mainUI["txt_0"] as TextField).text = "" + this._info.dv;
         (this._mainUI["txt_0"] as TextField).selectable = false;
         (this._mainUI["txt_3"] as TextField).text = "" + this._info.ev_attack;
         (this._mainUI["txt_3"] as TextField).selectable = false;
         (this._mainUI["txt_4"] as TextField).text = "" + this._info.ev_defence;
         (this._mainUI["txt_4"] as TextField).selectable = false;
         (this._mainUI["txt_8"] as TextField).text = "" + this._info.ev_hp;
         (this._mainUI["txt_8"] as TextField).selectable = false;
         (this._mainUI["txt_5"] as TextField).text = "" + this._info.ev_sa;
         (this._mainUI["txt_5"] as TextField).selectable = false;
         (this._mainUI["txt_6"] as TextField).text = "" + this._info.ev_sd;
         (this._mainUI["txt_6"] as TextField).selectable = false;
         (this._mainUI["txt_7"] as TextField).text = "" + this._info.ev_sp;
         (this._mainUI["txt_7"] as TextField).selectable = false;
         (this._mainUI["txt_9"] as TextField).text = "" + PetXMLInfo.getName(this._info.id);
         (this._mainUI["txt_9"] as TextField).selectable = false;
         (this._mainUI["txt_1"] as TextField).text = NatureXMLInfo.getName(this._info.nature) + "" + "(" + NatureXMLInfo.getDes(this._info.nature) + ")";
         (this._mainUI["txt_1"] as TextField).selectable = false;
         if(this.isfull())
         {
            (this._mainUI["txt_2"] as TextField).text = "已刷满";
         }
         else
         {
            (this._mainUI["txt_2"] as TextField).text = "未刷满";
         }
         (this._mainUI["txt_2"] as TextField).selectable = false;
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
      }
      
      private function isfull() : Boolean
      {
         var _loc1_:Boolean = false;
         var _loc2_:uint = this._info.ev_attack + this._info.ev_defence + this._info.ev_hp + this._info.ev_sa + this._info.ev_sd + this._info.ev_sp;
         if(_loc2_ >= 510)
         {
            _loc1_ = true;
         }
         return _loc1_;
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
      }
   }
}
